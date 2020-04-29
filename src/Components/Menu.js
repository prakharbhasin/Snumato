import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@material-ui/core";
import axios from "axios";

function Menu(props) {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/restaurants_menu?restaurant_id=${props.id}`)
      .then((res) => res.data)
      .then((result) => setMenu(result.restaurants));
  }, []);

  return (
    <div>
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
            <TableCell>.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu &&
            menu.map((item) => (
              <TableRow>
                <TableCell style={{ color: "white" }}>
                  {item.item_name}
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  {" "}
                  {item.item_cost}
                </TableCell>
                <TableCell align="right">
                  <Button color="secondary" variant="outlined">
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Menu;
