import { action } from "easy-peasy";

export default {
  //states
  loggedName: null,
  isLogged: false,

  //actions
  login: action((state,name) => {
    state.isLogged = true;
    console.log("log=", state.isLogged);
    state.loggedName = name;
  }),
};
