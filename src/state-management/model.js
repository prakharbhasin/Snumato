import { action } from "easy-peasy";

export default {
  //states
  loggedName: null,
  isLogged: false,
  cart: [],

  //actions
  login: action((state,name) => {
    state.isLogged = true;
    console.log("log=", state.isLogged);
    state.loggedName = name;
  }),
  addtoCart: action((state,id) => {
    state.cart = [...state.cart,id];
    console.log("cart of",state.loggedName, "has: ");
    console.log(state.cart);
  })
};
