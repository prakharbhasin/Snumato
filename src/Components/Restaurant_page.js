import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

import CardRestaurant from "./Card_restaurant";
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
        <Grid container justify="space-evenly" style={{marginLeft: "5%"}}>
          {this.state.restaurants &&
            this.state.restaurants.map((res) => (
              <Grid item>
                <CardRestaurant rest={res} name={res.name} description={res.location} />
              </Grid>
            ))}
          {/* <Grid item>
            <CardRestaurant name="Naveen Tea House" description="..duh" />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="Swad Kathi Roll"
              description="For times when mess card balance isn't enough"
            />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="Anna's Cafe"
              description="Andu gondus should have all the fun, period."
            />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="Surya Tuck Shop"
              description="My income is from omelettes :3"
            />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="Adda Cafe"
              description="Mai maggi 25 ki deta hu ;_;"
            />
          </Grid>
          <Grid item>
            <CardRestaurant
              name="Celeste Cafe"
              description="Chilli Paneer Samosa ftw"
            />
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default Restaurant_page;
