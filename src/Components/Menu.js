import React, { useEffect, useState, Fragment } from "react";
import {
  Typography,
  Button,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Grid,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";

function Menu(props) {
  const [menu, setMenu] = useState(null);
  const [isAdded, add] = useState([]);
  const addItem = useStoreActions((action) => action.addtoCart);
  const { message, token } = useStoreState((state) => ({
    message: state.item_message,
    token: state.token,
  }));

  const [added, setAdded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/restaurants_menu?restaurant_id=${props.id}`)
      .then((res) => res.data)
      .then((result) => setMenu(result.restaurants));
  }, [props.id]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAdded(false);
  };

  return (
    <Fragment>
      <Grid container justify="center" style={{ marginTop: "3%" }}>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            color="secondary"
            align="left"
            style={{ paddingLeft: 10 }}
          >
            Menu
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "white", fontSize: "19px" }}>
                  Item
                </TableCell>
                <TableCell
                  style={{ color: "white", fontSize: "19px" }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu &&
                menu.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell style={{ color: "white" }}>
                      {item.item_name}
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="center">
                      {" "}
                      {item.item_cost}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        color="secondary"
                        variant="outlined"
                        onClick={() => {
                          addItem({ item, token });
                          add([...isAdded, item]);
                          console.log(message);
                          if (message === "the item is already in cart") {
                            setAdded(true);
                          } else if (
                            message ===
                            "Item has been successfully added to the cart."
                          ) {
                            setAdded(true);
                          }
                        }}
                      >
                        Add
                      </Button>
                      <Snackbar
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        open={added}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message={message}
                        action={
                          <React.Fragment>
                            <IconButton
                              size="small"
                              aria-label="close"
                              color="inherit"
                              onClick={() => setAdded(false)}
                            >
                              <CheckCircleRoundedIcon fontSize="small" />
                            </IconButton>
                          </React.Fragment>
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Menu;
