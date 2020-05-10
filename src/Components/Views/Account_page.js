import React, { useState, Fragment } from "react";
import {
  Typography,
  Paper,
  Grid,
  Table,
  TableRow,
  TableCell,
  Button,
  Avatar,
  TableBody,
  makeStyles,
  TextField,
} from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import OrderList from "../OrderList";
import { useStoreState, useStoreActions } from "easy-peasy";
import Axios from "axios";
import "../../resources/CSS/account.css";

function Account_page(props) {
  const {
    loggedName,
    loggedLName,
    name,
    phno,
    mail,
    isLogged,
    token,
  } = useStoreState((state) => ({
    loggedName: state.loggedName,
    loggedLName: state.loggedLName,
    name: state.name,
    phno: state.phno,
    mail: state.mail,
    isLogged: state.isLogged,
    token: state.token,
  }));

  const [phone, setPhone] = useState("");
  const [phoneState, setPhoneState] = useState(false);
  const [inputPhone, setInputPhone] = useState(false);

  const handlePhone = () => {
    setPhoneState(true);
    //console.log(phoneState);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    //console.log("email=", email, "pass=", pass);
    Axios.post(
      "http://127.0.0.1:8000/user/infoupdate",
      {
        email: mail,
        first_name: loggedName,
        last_name: loggedLName,
        mobile_num: phone,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )

      .then(console.log(phone))
      .then(setPhoneState(false))
      .then(setInputPhone(true))
      .catch((e) => console.log(e));
  };

  const { logout } = useStoreActions((action) => ({
    logout: action.logout,
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
          cursor: "pointer",
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

  const classes = useStyles();
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
                style={{ marginLeft: "25%", paddingBottom: "3%" }}
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
                      {/* <TableCell> */}
                      {phoneState ? (
                        <Fragment>
                          <TextField
                            onInput={(e) => setPhone(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            label=""
                            color="secondary"
                            className={classes.textfield}
                            defaultValue={phno}
                          />
                          <Button
                            color="secondary"
                            onClick={handlePhoneSubmit}
                            style={{
                              marginLeft: "15px",
                              marginTop: "30px",
                            }}
                          >
                            Update
                          </Button>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <TextField
                            className={classes.textfield}
                            defaultValue={inputPhone ? phone : phno}
                            variant="outlined"
                            disabled
                            style={{
                              color: "white",
                              fontFamily: "Josefin Sans, sans-serif",
                              // marginTop: "30px",
                            }}
                          />
                          {/* {inputPhone ? phone : phno}
                            </Typography> */}
                          <EditOutlinedIcon
                            onClick={handlePhone}
                            color="secondary"
                            style={{
                              marginLeft: "47px",
                              fontSize: "22px",
                              marginTop: "15px",
                            }}
                          />
                        </Fragment>
                      )}
                      {/* </TableCell> */}
                    </TableRow>
                  </TableBody>
                </Table>
                <Grid item xs={4} style={{ marginTop: "5%" }}>
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
