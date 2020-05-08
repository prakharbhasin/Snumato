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

  //this is temp solution for images, will put in server:
  images = {
    1: "http://www.sakinahalalgrill.com/wp-content/uploads/2018/04/chai-tea.jpg",
    2: "https://tasystreets.files.wordpress.com/2014/08/hamcheeseomelet_n_lg.jpg",
    3: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/kathi-roll-recipe.jpg",
    4: "http://www.foodofy.com/wp-content/uploads/2015/07/11014_14_site_clear.jpeg",
    5: "https://content.jdmagicbox.com/comp/delhi/l2/011pxx11.xx11.150409141607.h9l2/catalogue/the-adda-raheja-mall-gurgaon-delhi-fast-food-2k6ociy.jpg",
    6: "https://media-cdn.tripadvisor.com/media/photo-s/0d/28/30/33/nescafe-cafe.jpg",
  };

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
              <Grid item key={res.restaurant_id}>
                <CardRestaurant
                  rest={res}
                  name={res.name}
                  description={res.location}
                  image={this.images[res.restaurant_id]}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default Restaurant_page;
