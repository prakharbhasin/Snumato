import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import Axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";

const Serving = (props) => {
  //   const { increase, decrease } = props.state;
  // console.log(props);
  const { item } = props;
  const updateCart = useStoreActions((action) => action.updateCart);
  const token = useStoreState((state) => state.token);

  const increase = 1,
    decrease = -1;

  return (
    <ButtonGroup size="large" aria-label="quantity-selector" color="secondary">
      <Button
        onClick={() => {
          updateCart({ item, token, val: decrease });
        }}
      >
        -
      </Button>
      <Button>{item.item_quantity}</Button>
      <Button
        onClick={() => {
          updateCart({ item, token, val: increase });
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
};

export default Serving;
