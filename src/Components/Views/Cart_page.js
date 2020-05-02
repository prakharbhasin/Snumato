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
import Confetti from "react-confetti"

import "../../resources/CSS/cartpage.css";

class Cart_page extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      confetti:false
    };
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  };
  handleClick=(e)=>{
    this.setState({confetti:true})
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={7}>
          <Paper style={{background:"black"}}>{this.state.confetti?
          <div style={{background:"black", width:"150px",height:"50em"}} align="center">
          
            <h1 style={{color:"white",paddingTop:"200%", marginLeft:"27%",whiteSpace:"nowrap",fontSize:"50px"}}>YOUR ORDER WAS PLACED!</h1>
            
            
          <Confetti initialVelocityY="700" initialVelocityX="10" numberOfPieces="1000">
          
          </Confetti>
          </div>
          :
          <div>
            <Typography variant="h2" align="center" color="secondary" style={{fontFamily:"Josefin Sans, sans-serif",padding:"20px"}}>
              CART
            </Typography>
            <Typography variant="h6" align="left" style={{margin:"10px",fontFamily:"Josefin Sans, sans-serif",color:"white"}}>
              We Dem Tourist Cafe
              </Typography>
            
              <Table aria-label="cart-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Food Item</TableCell>
                    <TableCell align="center">Servings</TableCell>
                    <TableCell align="center">Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                 <TableRow>
                    <TableCell>Bhasin Bhajia Pao</TableCell>
                    <TableCell align="center">
                      <Serving
                        increase={this.increase}
                        decrease={this.decrease}
                        value={this.state.value}
                      />
                    </TableCell>
                    <TableCell align="center"> 
                    ${this.state.value*520}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Singh Singhaade</TableCell>
                    <TableCell align="center">
                    <Serving
                        increase={this.increase}
                        decrease={this.decrease}
                        value={this.state.value}
                      />
                    </TableCell>
                    <TableCell align="center">
                        ${this.state.value*140}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jain Shikanji</TableCell>
                    <TableCell align="center">
                    <Serving
                        increase={this.increase}
                        decrease={this.decrease}
                        value={this.state.value}
                      />
                    </TableCell>
                    <TableCell align="center">
                      ${this.state.value*300}
                    </TableCell>
                  </TableRow>
                  <br/>
                  <TableRow><TableCell align="left" style={{fontSize:"19px", color:"#F05",fontFamily:"Josefin Sans, sans-serif"}}>Bill Details</TableCell></TableRow>
                  <TableCell align="left" fontSize="10px" style={{fontSize:"13px",fontFamily:"Josefin Sans, sans-serif"}}> Net Charge: 200$ <br/> Delivery Charge:  10$ <br/> Total Amount: 210$</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button align="right" variant="contained" color="secondary" style={{fontFamily:"Josefin Sans, sans-serif"}} onClick={this.handleClick}>Place Order</Button>
                  </TableCell>
                </TableBody>
              </Table>
              </div>
  }
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Cart_page;
