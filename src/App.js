import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StoreProvider, createStore } from "easy-peasy";
import model from "./state-management/model";
import HomePage from "./Components/Views/Home_page";
import LoginPage from "./Components/Views/Login_page";
import Navbar from "./Layout/Navbar";
import RestaurantPage from "./Components/Views/Restaurant_page";
import Restaurant from "./Components/Views/Restaurant";
import SignUp from "./Components/Views/signup";
import Cart from "./Components/Views/Cart_page";
import Account from "./Components/Views/Account_page";
import About_Us from "./Components/Views/About_us";
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
              <Route path="/snumato-dbms/About_us" exact component={About_Us} />
            </Switch>
          </Navbar>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
