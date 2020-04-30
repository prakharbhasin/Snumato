import { action } from "easy-peasy";

export default {
  //states
  loggedName: "",
  isLogged: false,

  //actions
  login: action((state,name) => {
    state.isLogged = true;
    console.log("log=", state.isLogged);
    console.log("name=", name);
  }),
};
