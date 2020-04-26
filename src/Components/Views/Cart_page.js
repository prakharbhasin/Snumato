import React, { Component, Fragment } from "react";
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

class Cart_page extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={7}>
          <Paper>
            <Typography variant="h1" align="center">
              CART
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="cart-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Food Item</TableCell>
                    <TableCell align="right">Rate</TableCell>
                    <TableCell>Servings</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Paneer</TableCell>
                    <TableCell align="right">$1000</TableCell>
                    <TableCell>
                      <Serving
                        increase={this.increase}
                        decrease={this.decrease}
                        value={this.state.value}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Paneer</TableCell>
                    <TableCell align="right">$1000</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Paneer</TableCell>
                    <TableCell align="right">$1000</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Cart_page;
