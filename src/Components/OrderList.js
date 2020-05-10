import React, { useState, useEffect, Fragment } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import { useStoreState } from "easy-peasy";
import Axios from "axios";
import Collapse from "@material-ui/core/Collapse";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  switch: {
    "& .MuiFormControlLabel-label": {
      color: "white",
    },
  },
}));

const OrderList = () => {
  const [showItem, setShowItem] = useState(false);
  const [orders, setOrders] = useState();
  //   const getOrders = useStoreActions((action) => action.getOrders);
  const token = useStoreState((state) => state.token);

  //   useEffect(() => getOrders(), orders);

  const handleChange = () => {
    setShowItem((orders) => !orders);
  };
  // const handleHover = (e) => {
  //   setShowItem(true);
  // };
  // const handleHoverOut = (e) => {
  //   setShowItem(false);
  // };

  const getOrders = () => {
    console.log("Fetching your orders");
    Axios.get("http://127.0.0.1:8000/orderhistory", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        setOrders(res.orders);
      });
  };

  useEffect(() => getOrders(), []);

  const classes = useStyles();

  return (
    <Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={showItem}
            onChange={handleChange}
            color="secondary"
          />
        }
        label="Show Item Details"
        style={{ marginLeft: "20px" }}
        className={classes.switch}
      />
      <Table align="center">
        <TableHead>
          <TableRow align="center">
            <TableCell
              style={{
                color: "white",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Order ID
            </TableCell>
            <TableCell
              style={{
                color: "white",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Date
            </TableCell>
            <TableCell
              style={{
                color: "white",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Time
            </TableCell>
            <TableCell
              style={{
                color: "white",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Total
            </TableCell>
            <TableCell
              style={{
                color: "white",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Payment Method
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders &&
            orders.map((order) => (
              <TableRow key={order.order_id}>
                <TableCell
                  // onMouseOver={handleHover}
                  // onMouseOut={handleHoverOut}
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans, sans-serif",
                  }}
                >
                  {order.order_id}
                  {console.log(order)}
                  <Collapse in={showItem}>
                    <Fragment>
                      {JSON.parse(order.order_description).map((item) => (
                        <Typography key={item.id} style={{ color: "#555" }}>
                          {item.item_name}
                        </Typography>
                      ))}
                    </Fragment>
                  </Collapse>
                  {/* {showItem ? (
                    <Fragment>
                      {JSON.parse(order.order_description).map((item) => (
                        <Typography key={item.id} style={{ color: "#555" }}>
                          {item.item_name}
                        </Typography>
                      ))}
                    </Fragment>
                  ) : (
                    <div></div>
                  )} */}
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans, sans-serif",
                  }}
                >
                  {order.date_time.slice(0, 10)}
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans, sans-serif",
                  }}
                >
                  {order.date_time.slice(11, 16)}
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans, sans-serif",
                  }}
                >
                  ₹{order.total_amount}
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    fontFamily: "Josefin Sans, sans-serif",
                  }}
                >
                  {order.payment_method}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default OrderList;
