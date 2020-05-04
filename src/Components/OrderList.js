import React, { useState, useEffect, Fragment } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";
import { useStoreState } from "easy-peasy";
import Axios from "axios";

const OrderList = () => {
  const [showItem, setShowItem] = useState(false);
  const [orders, setOrders] = useState();
  //   const getOrders = useStoreActions((action) => action.getOrders);
  const token = useStoreState((state) => state.token);

  //   useEffect(() => getOrders(), orders);

  const handleHover = (e) => {
    setShowItem(true);
  };
  const handleHoverOut = (e) => {
    setShowItem(false);
  };

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

  return (
    <Table align="center">
      <TableHead>
        <TableRow align="center">
          <TableCell
            style={{
              color: "white",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Restaurant
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
        </TableRow>
      </TableHead>
      <TableBody>
        {orders &&
          orders.map((order) => (
            <TableRow>
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
                  <Fragment>
                    <Typography style={{ color: "#555" }}>
                      Order ID : {order.order_id}
                    </Typography>
                    <Typography style={{ color: "#555" }}>
                      {order.payment_method}
                    </Typography>
                    <Typography style={{ color: "#555" }}>
                      Item 3: Quantity
                    </Typography>
                  </Fragment>
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
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default OrderList;
