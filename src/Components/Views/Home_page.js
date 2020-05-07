import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../resources/CSS/homepage.css";
import { Button, Grid } from "@material-ui/core";
import { useStoreState } from "easy-peasy";

// const BTstyle = {
//   opacity: "0.8",
//   //background: "#C34",
//   alignItems: "justify",
//   margin: "10px",
//   padding: "5px",
//   fontFamily: "Baloo Da 2"
// };

// TODO : Variable size of cards to be made constant
const Home_page = () => {
  const isLogged = useStoreState((state) => state.isLogged);

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
        {isLogged ? (
          <Fragment>
            <Button
              className="BT"
              to="/snumato-dbms/Restaurant_page"
              color="secondary"
              variant="contained"
              component={Link}
              justify="center"
            >
              BROWSE
            </Button>
            {/* <Button
              to="/snumato-dbms/account"
              color="secondary"
              variant="contained"
              component={Link}
              className="BT"
            >
              ACCOUNT
            </Button> */}
          </Fragment>
        ) : (
          <Button
            className="BT"
            to="/snumato-dbms/Restaurant_page"
            color="secondary"
            variant="contained"
            component={Link}
            justify="center"
          >
            BROWSE
          </Button>
        )}
        
      </Grid>

      {/*<h1> SNUMATO</h1>*/}
    </div>
  );
};

export default Home_page;
