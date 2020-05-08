import React from "react";
import { action, thunk } from "easy-peasy";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export default {
  //* states
  loggedName: null,
  loggedLName: null,
  name: null,
  phno: null,
  mail: null,
  loc: null,
  token: null,
  isLogged: false,
  cart: [],
  totalCost: 0,
  finalCost: 0,
  orders: 0,

  item_message: null,

  //* actions
  // ! LOGIN
  login: action((state, res) => {
    const { user_data, token } = res;
    // console.log(user_data);
    state.isLogged = true;
    console.log("log=", state.isLogged);
    console.log(token);
    state.loggedName = user_data.first_name;
    state.loggedLName = user_data.last_name;
    state.name = user_data.first_name + " " + user_data.last_name;
    state.phno = user_data.mobile_num;
    state.mail = user_data.email;
    state.token = token;
    Cookies.set("user", {
      token: state.token,
      loggedName: state.loggedName,
      name: state.name,
      mail: state.mail,
      phno: state.phno,
      isLogged: state.isLogged,
      // cart: state.cart,
    });
  }),

  //! LOGOUT
  logout: action((state) => {
    state.isLogged = false;
    Cookies.remove("user");
    // state.loggedName = null;
    // state.token = "";
    return <Redirect to="/snuamto-dbms" />;
  }),

  //! Delete item
  deleteItem: action((state, item) => {
    console.log(item);
    Axios.post(
      "http://localhost:8000/deleteitem",
      {
        item_id: item.item_id,
      },
      {
        headers: {
          Authorization: `Token ${state.token}`,
        },
      }
    )
      .then((res) => res.data)
      .then((res) => console.log(res));
  }),

  //!Fill Cart
  fillCart: action((state, cart) => {
    state.cart = cart.data;
    state.totalCost = cart.total_cost;
    state.finalCost = cart.final_cost;
  }),

  //! Auth from Cookies
  Auth: action((state) => {
    const info = Cookies.get("user");
    // console.log(JSON.parse(info));
    const { loggedName, name, mail, phno, token, isLogged } = JSON.parse(info);
    state.loggedName = loggedName;
    state.name = name;
    state.mail = mail;
    state.phno = phno;
    state.isLogged = isLogged;
    state.token = token;
    // state.cart = cart;
    // console.log("Auth happened with values");
    // console.log(state.loggedName, state.token);
  }),

  setMessage: action((state, payload) => {
    state.item_message = payload;
  }),

  // //! GetOrders
  // getOrders: action((state) => {
  //   console.log("Fetching your orders");
  //   var orders;
  //   return Axios.get("http://127.0.0.1:8000/orderhistory", {
  //     headers: {
  //       Authorization: `Token ${state.token}`,
  //     },
  //   })
  //     .then((res) => {
  //       console.log("hello 1");
  //       return res.data;
  //     })
  //     .then((res) => {
  //       console.log("hello 2");
  //       orders = res.orders;
  //     });
  //   return orders;
  // }),

  //* Thunks
  //! Fetch Cart
  fetchCart: thunk(async (actions, payload) => {
    console.log("fetched");
    if (payload) {
      console.log("token=", payload);
      const cart = await Axios.get("http://127.0.0.1:8000/cart", {
        headers: {
          Authorization: `Token ${payload}`,
        },
      }).then((res) => res.data);
      actions.fillCart(cart);
    }
    // console.log(getStoreState().cart);
  }),

  //! Update Cart
  updateCart: thunk(async (actions, payload) => {
    console.log(payload);
    console.log(
      payload.item.item_id,
      "new quantity=",
      payload.item.item_quantity + payload.val
    );
    await Axios.post(
      "http://localhost:8000/updatecart",
      {
        item_id: payload.item.item_id,
        quantity: payload.item.item_quantity + payload.val,
      },
      {
        headers: {
          Authorization: `Token ${payload.token}`,
        },
      }
    ).then((res) => console.log("update cart result =", res.data));
    actions.fetchCart(payload.token);
  }),

  //! Place Order
  placeOrder: thunk((action, payload) => {
    action.fetchCart(payload.token);
    Axios.post(
      "http://127.0.0.1:8000/placeorder",
      {
        address: payload.address,

        payment_method: payload.payment_method,
      },
      {
        headers: {
          Authorization: `Token ${payload.token}`,
        },
      }
    )
      .then((res) => res.data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }),

  // ! ADD TO CART
  addtoCart: thunk((actions, payload) => {
    console.log(payload.item);
    Axios.post(
      "http://localhost:8000/addtocart",
      {
        restaurant_id: payload.item.restaurant_id,
        item_id: payload.item.id,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Token ${payload.token}`,
        },
      }
    )
      .then((res) => res.data)
      .then((res) => {
        actions.setMessage(res.message);
      })
      .catch((error) => error.message);
    // state.cart = [...state.cart, item];
    // console.log("cart of", state.loggedName, "has: ");
    // console.log(state.cart);
  }),
};
