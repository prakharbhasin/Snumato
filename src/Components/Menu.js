import React from "react";
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

function Menu() {
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
            <TableCell>kfjdbfwbfbfjk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{ color: "white" }}>Masala Tea</TableCell>
            <TableCell style={{ color: "white" }} align="center">
              {" "}
              Rs.10
            </TableCell>
            <TableCell align="right">
              <Button color="secondary" variant="outlined">
                Add
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "white" }}>Hot Bournvita</TableCell>
            <TableCell style={{ color: "white" }} align="center">
              {" "}
              Rs.30
            </TableCell>
            <TableCell align="right">
              <Button color="secondary" variant="outlined">
                Add
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "white" }}>Hot Coffee</TableCell>
            <TableCell style={{ color: "white" }} align="center">
              {" "}
              Rs.20
            </TableCell>
            <TableCell align="right">
              <Button color="secondary" variant="outlined">
                Add
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "white" }}>Cold Bournvita</TableCell>
            <TableCell style={{ color: "white" }} align="center">
              {" "}
              Rs.35
            </TableCell>
            <TableCell align="right">
              <Button color="secondary" variant="outlined">
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Menu;
