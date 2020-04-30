import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import CardRestaurant from "../Card_restaurant";
class Restaurant_page extends Component {
  state = {
    restaurants: 0,
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/restaurants")
      .then((res) => res.data)
      .then((data) => this.setState({ restaurants: data.restaurants }));
  }

  render() {
    return (
      <div>
        <Grid
          container
          justify="space-evenly"
          spacing={1}
          style={{ marginLeft: "5%" }}
        >
          {this.state.restaurants &&
            this.state.restaurants.map((res) => (
              <Grid item>
                <CardRestaurant
                  rest={res}
                  name={res.name}
                  description={res.location}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default Restaurant_page;
