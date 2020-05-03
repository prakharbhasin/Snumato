import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  StoreProvider,
  createStore,
  useStoreActions,
  useStoreState,
  action,
} from "easy-peasy";
import model from "./state-management/model";
import HomePage from "./Components/Views/Home_page";
import LoginPage from "./Components/Views/Login_page";
import Navbar from "./Layout/Navbar";
import RestaurantPage from "./Components/Views/Restaurant_page";
import Restaurant from "./Components/Views/Restaurant";
import SignUp from "./Components/Views/signup";
import Cart from "./Components/Views/Cart_page";
import Account from "./Components/Views/Account_page";
import ParticleContainer from "./Layout/ParticleContainer";
import Cookies from "js-cookie";
import Axios from "axios";
import AuthLayer from "./state-management/AuthLayer";

//easy-peasy state store
const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        {/* <ParticleContainer /> */}
        <Router>
          <AuthLayer />
          <Navbar>
            <Switch>
              <Route path="/snumato-dbms/" exact component={HomePage} />
              <Route
                path="/snumato-dbms/login_page"
                exact
                component={LoginPage}
              />
              <Route
                path="/snumato-dbms/Restaurant_page"
                exact
                component={RestaurantPage}
              />
              <Route
                path="/snumato-dbms/Restaurant"
                exact
                component={Restaurant}
              />
              <Route path="/snumato-dbms/signup" exact component={SignUp} />
              <Route path="/snumato-dbms/cart" exact component={Cart} />
              <Route path="/snumato-dbms/account" exact component={Account} />
            </Switch>
          </Navbar>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
