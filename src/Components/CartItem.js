import React, { Fragment, useState } from "react";
import { useStoreActions } from "easy-peasy";
import { TableRow, TableCell, Button } from "@material-ui/core";
import Serving from "./Serving";

const CartItem = (props) => {
  const { item } = props;

  const { deleteItem, fetchCart } = useStoreActions((action) => ({
    deleteItem: action.deleteItem,
    fetchCart: action.fetchCart,
  }));

  const [itemExist, setItemExist] = useState(true)

  return (itemExist ?
    <Fragment key={item.id}>
      <TableRow>
        <TableCell>{item.item_name}</TableCell>
        <TableCell align="center">
          <Serving item={item} />
        </TableCell>
        <TableCell align="center">{item.item_cost}</TableCell>
        <TableCell align="center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              deleteItem(item);
              setItemExist(false)
            }}
          >
            X
          </Button>
        </TableCell>
      </TableRow>
    </Fragment> : null
  );
};

export default CartItem;
