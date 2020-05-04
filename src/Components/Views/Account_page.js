import React, { useState, Fragment } from "react";
import {
  Typography,
  Paper,
  Grid,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Button,
  IconButton,
  ButtonGroup,
  Avatar,
  Card,
  TableHead,
  TableBody,
} from "@material-ui/core";
import OrderList from "../OrderList";
import { withStyles } from "@material-ui/core/styles";
import { useStoreState, useStoreActions } from "easy-peasy";
import "../../resources/CSS/account.css";

function Account_page(props) {
  const { loggedName, name, phno, mail, isLogged } = useStoreState((state) => ({
    loggedName: state.loggedName,
    name: state.name,
    phno: state.phno,
    mail: state.mail,
    isLogged: state.isLogged,
  }));

  const { logout, getOrders } = useStoreActions((action) => ({
    logout: action.logout,
    getOrders: action.getOrders,
  }));



  return (
    <Grid container justify="center">
      <Grid item xs={7}>
        <Paper style={{ background: "black", opacity: "95" }}>
          {isLogged ? (
            <Fragment>
              <Grid
                item
                xs={6}
                align="center"
                style={{
                  paddingTop: "3%",
                  marginLeft: "25%",
                  paddingBottom: "5%",
                }}
              >
                <Avatar
                  style={{
                    background: "#F05",
                    height: "70px",
                    width: "70px",
                    marginBottom: "3%",
                    fontSize: "40px",
                  }}
                >
                  {loggedName.toUpperCase().charAt(0)}
                </Avatar>
                <Typography
                  align="center"
                  variant="h3"
                  color="secondary"
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                  {name}
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                align="center"
                style={{ marginLeft: "25%", paddingBottom: "5%" }}
              >
                <Button variant="contained" color="secondary" onClick={logout}>
                  Logout
                </Button>
              </Grid>

              <Grid item xs={8}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="h6" color="secondary">
                          Email ID:{" "}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color: "white",
                            fontFamily: "Josefin Sans, sans-serif",
                          }}
                        >
                          {mail}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="h6" color="secondary">
                          Phone Number:{" "}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color: "white",
                            fontFamily: "Josefin Sans, sans-serif",
                          }}
                        >
                          {phno}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Grid item xs={4} style={{ marginTop: "10%" }}>
                  <Typography
                    color="secondary"
                    variant="h4"
                    style={{
                      fontFamily: "Josefin Sans, sans-serif",
                      marginLeft: "10px",
                    }}
                  >
                    ORDERS
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: "3%" }}>
                <OrderList />
                {/* <TableRow>
                      <TableCell
                        onMouseOver={handleHover}
                        onMouseOut={handleHoverOut}
                        style={{
                          color: "white",
                          fontFamily: "Josefin Sans, sans-serif",
                        }}
                      >
                        Naveen Tea Stall
                        {showItem ? (
                          <div>
                            <Typography style={{ color: "#555" }}>
                              Item 1: Quantity
                            </Typography>
                            <Typography style={{ color: "#555" }}>
                              Item 2: Quantity
                            </Typography>
                            <Typography style={{ color: "#555" }}>
                              Item 3: Quantity
                            </Typography>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          fontFamily: "Josefin Sans, sans-serif",
                        }}
                      >
                        25/01/2020
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          fontFamily: "Josefin Sans, sans-serif",
                        }}
                      >
                        15 minutes
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{
                          color: "white",
                          fontFamily: "Josefin Sans, sans-serif",
                        }}
                      >
                        Surya Tuck Shop
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          fontFamily: "Josefin Sans, sans-serif",
                        }}
                      >
                        25/01/2020
                      </TableCell>
                      <TableCell
                        style={{
                          color: "white",
                          fontFamily: "Josefin Sans, sans-serif",
                        }}
                      >
                        15 minutes
                      </TableCell>
                    </TableRow> */}
              </Grid>
            </Fragment>
          ) : (
            <Grid
              item
              xs={6}
              align="center"
              style={{
                paddingTop: "3%",
                marginLeft: "25%",
                paddingBottom: "5%",
              }}
            >
              <Typography variant="h3" style={{ color: "white" }}>
                You need to login to see this information
              </Typography>
            </Grid>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Account_page;
