import React, { Component, Fragment, useEffect } from "react";
import {
  Typography,
  Paper,
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Button,
  IconButton,
  ButtonGroup,
} from "@material-ui/core";
import Serving from "../Serving";

import "../../resources/CSS/cartpage.css";
import Axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";

function Cart_page() {
  const { cart, totalCost, finalCost } = useStoreState((state) => ({
    token: state.token,
    cart: state.cart,
    isLogged: state.isLogged,
    totalCost: state.totalCost,
    finalCost: state.finalCost,
  }));

  const fetchCart = useStoreActions((action) => action.fetchCart);
  console.log(cart);
  // for (const item in precart) {
  //   if (cart.hasOwnProperty(item)) {
  //     cart[] = cart[item];
  //   }
  // }
  // useEffect(()=>fetchCart(token),[])

  return (
    <Grid container justify="center">
      <Grid item xs={7}>
        <Paper>
          <Typography
            variant="h2"
            align="center"
            color="secondary"
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              padding: "20px",
            }}
          >
            CART
          </Typography>
          <Typography
            variant="h6"
            align="left"
            style={{ margin: "10px", fontFamily: "Josefin Sans, sans-serif" }}
          >
            We Dem Tourist Cafe
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="cart-table">
              <TableHead>
                <TableRow>
                  <TableCell>Food Item</TableCell>
                  <TableCell align="center">Servings</TableCell>
                  <TableCell align="center">Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <Fragment key={item.id}>
                    <TableRow>
                      <TableCell>{item.item_name}</TableCell>
                      <TableCell align="center">
                        <Serving item={item} />
                      </TableCell>
                      <TableCell align="center">{item.item_cost}</TableCell>
                    </TableRow>
                  </Fragment>
                ))}
                <TableRow>
                  <TableCell
                    align="left"
                    style={{
                      fontSize: "19px",
                      color: "#F05",
                      fontFamily: "Josefin Sans, sans-serif",
                    }}
                  >
                    Bill Details
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    fontSize="10px"
                    style={{
                      fontSize: "13px",
                      fontFamily: "Josefin Sans, sans-serif",
                    }}
                  >
                    {" "}
                    Net Charge: ₹{totalCost} <br /> Delivery Charge: ₹10 <br />{" "}
                    Total Amount: ₹{Math.ceil(finalCost)}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button
                      align="right"
                      variant="contained"
                      color="secondary"
                      style={{ fontFamily: "Josefin Sans, sans-serif" }}
                    >
                      Place Order
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Cart_page;
