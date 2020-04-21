import React, { Component } from "react";
import { Link } from "react-router-dom";

import CardRestaurant from "../Card_restaurant";
import "../../resources/CSS/homepage.css"
import { Button, Grid } from "@material-ui/core";

// const BTstyle = {
//   opacity: "0.8",
//   //background: "#C34",
//   alignItems: "justify",
//   margin: "10px",
//   padding: "5px",
//   fontFamily: "Baloo Da 2"
// };

// TODO : Variable size of cards to be made constant
class home_page extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Grid container justify="flex-end" direction="row" alignItems="flex-start">
        <Button
          style={BTstyle}
          to="/login_page"
          color="secondary"
          variant="text"
          component={Link}
          className="BT"
        >
          LOGIN/SIGN UP
        </Button>
        </Grid> */}
        <Grid
          container
          justify="space-evenly"
          // direction="column"
          alignItems="stretch"
        >
          <Button
            className="BT"
            to="/Restaurant_page"
            color="secondary"
            variant="contained"
            component={Link}
            justify="center"
          >
            BROWSE
          </Button>
          {/*<Button
            to="/login_page"
            color="secondary"
            variant="contained"
            component={Link}
            className="BT"
          >
            LOGIN/SIGN UP
          </Button>*/}
        </Grid>
      </div>
    );
  }
}

export default home_page;
