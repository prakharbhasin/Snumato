import React, { Component, Fragment, useEffect, useState } from "react";
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
  Radio,
  FormControlLabel,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Serving from "../Serving";
import CartItem from "../CartItem";
import Confetti from "react-confetti";
import { makeStyles } from "@material-ui/core/styles";
import "../../resources/CSS/cartpage.css";
import { useStoreState, useStoreActions, action } from "easy-peasy";

function Cart_page() {
  const { cart, totalCost, finalCost } = useStoreState((state) => ({
    cart: state.cart,
    totalCost: state.totalCost,
    finalCost: state.finalCost,
  }));

  const useStyles = makeStyles((theme) => ({
    textfield: {
      "& .MuiInputBase-input": {
        color: "white",
      },
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInputLabel-root": {
        color: "rgb(255,0,85)",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "green",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgb(255,0,85)",
        },
        "&:hover fieldset": {
          borderColor: "rgb(255,0,85)",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
          color: "white",
        },
        "& .MuiInputBase-input": {
          color: "white",
        },
      },
    },
  }));

  const [confetti, setconfetti] = useState(false);

  const handleClick = () => {
    setconfetti(true);
  };

  //const fetchCart = useStoreActions((action) => action.fetchCart);
  //console.log(cart);
  // for (const item in precart) {
  //   if (cart.hasOwnProperty(item)) {
  //     cart[] = cart[item];
  //   }
  // }
  // useEffect(()=>fetchCart(token),[])
  //const { cart, totalCost, finalCost } = useStoreState((state) => ({
  //cart: state.cart,
  //totalCost: state.totalCost,
  //finalCost: state.finalCost,
  //}));

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
    <Grid container item justify="center">
      <Grid item xs={7}>
        <Paper style={{ backgroundColor: "black" }}>
          {confetti ? (
            <div
              style={{ background: "black", width: "150px", height: "50em" }}
              align="center"
            >
              <h1
                style={{
                  color: "white",
                  paddingTop: "200%",
                  marginLeft: "25%",
                  whiteSpace: "nowrap",
                  fontSize: "50px",
                }}
              >
                YOUR ORDER WAS PLACED!
              </h1>

              <Confetti
                initialVelocityY="700"
                initialVelocityX="10"
                numberOfPieces="1000"
              />
            </div>
          ) : (
            <Fragment>
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
                color="primary"
                style={{
                  margin: "10px",
                  fontFamily: "Josefin Sans, sans-serif",
                }}
              >
                We Dem Tourist Cafe
              </Typography>
              {/* <TableContainer component={Paper}> */}
              <Table aria-label="cart-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Food Item</TableCell>
                    <TableCell align="center">Servings</TableCell>
                    <TableCell align="center">Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {console.log(cart)} */}
                  {cart &&
                    cart.map((item) => <CartItem item={item} key={item.id} />)}
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
                    <TableCell>
                      <Grid container spacing={1}>
                        <Grid item>
                          <LocationOnIcon color="secondary" />
                        </Grid>
                        <Grid item>
                          <TextField
                            // autoFocus
                            variant="outlined"
                            id="input-with-icon-grid"
                            label="Address"
                            color="secondary"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
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
                      Net Charge: ₹{totalCost} <br /> Delivery Charge: ₹10{" "}
                      <br /> Total Amount: ₹{Math.ceil(finalCost)}
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell style={{ color: "white" }}>
                      <RadioGroup
                        row
                        align="right"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="PaytM"
                          control={<Radio style={{ color: "#F05" }} />}
                          label="PayTM"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="UPI"
                          control={<Radio style={{ color: "#F05" }} />}
                          label="UPI"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="COD"
                          control={<Radio style={{ color: "#F05" }} />}
                          label="COD"
                          labelPlacement="end"
                        />
                      </RadioGroup>
                    </TableCell>
                    {/* <TableCell></TableCell> */}
                    <TableCell align="center">
                      <Button
                        align="center"
                        variant="contained"
                        color="secondary"
                        style={{ fontFamily: "Josefin Sans, sans-serif" }}
                        onClick={handleClick}
                      >
                        Place Order
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              {/* </TableContainer> */}
            </Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Cart_page;
