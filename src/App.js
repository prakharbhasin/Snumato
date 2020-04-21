import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// import logo from "../logo.svg";
// import "../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Components/Views/Home_page";
import LoginPage from "./Components/Views/Login_page";
import Navbar from "./Layout/Navbar";
import RestaurantPage from "./Components/Restaurant_page";
import Restaurant from "./Components/Views/Restaurant";
import SignUp from "./Components/Views/signup";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login_page" exact component={LoginPage} />
            <Route path="/Restaurant_page" exact component={RestaurantPage} />
            <Route path="/Restaurant" exact component={Restaurant} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
