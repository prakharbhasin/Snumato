import React from "react";
import { action, thunk } from "easy-peasy";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default {
  //* states
  loggedName: null,
  token: "",
  isLogged: false,
  cart: [],
  totalCost: 0,
  finalCost: 0,

  //* actions
  // ! LOGIN
  login: action((state, res) => {
    const { user_data, token } = res;
    // console.log(user_data);
    state.isLogged = true;
    console.log("log=", state.isLogged);
    console.log(token);
    state.loggedName = user_data.first_name;
    state.token = token;
  }),

  //! LOGOUT
  logout: action((state) => {
    state.isLogged = false;
    state.loggedName = null;
    state.token = "";
    return <Redirect to="/snuamto-dbms" />;
  }),

  // ! ADD TO CART
  addtoCart: action((state, item) => {
    state.cart = [...state.cart, item];
    Axios.post(
      "http://localhost:8000/addtocart",
      {
        restaurant_id: item.restaurant_id,
        item_id: item.id,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Token ${state.token}`,
        },
      }
    )
      .then((res) => res.data)
      .then((res) => console.log(res))
      .catch((error) => error.message);
    console.log("cart of", state.loggedName, "has: ");
    console.log(state.cart);
  }),

  //!Fill Cart
  fillCart: action((state, cart) => {
    state.cart = cart.data;
    state.totalCost = cart.total_cost;
    state.finalCost = cart.final_cost;
  }),

  //* Thunks
  //! Fetch Cart
  fetchCart: thunk(async (actions, payload) => {
    console.log("token=", payload);
    const cart = await Axios.get("http://127.0.0.1:8000/cart", {
      headers: {
        Authorization: `Token ${payload}`,
      },
    }).then((res) => res.data);
    // .then((res) => res.data);
    actions.fillCart(cart);
    // console.log(getStoreState().cart);
  }),

  //! Update Cart
  updateCart: thunk(async (actions, payload) => {
    console.log(payload.item.id, payload.token);
    await Axios.post(
      "http://localhost:8000/updatecart",
      {
        item_id: payload.id,
        quantity: payload.item_quantity,
      },
      {
        headers: {
          Authorization: `Token ${payload.token}`,
        },
      }
    ).then((res) => console.log("update cart result =", res.data));
  }),
};
