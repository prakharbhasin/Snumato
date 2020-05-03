import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import Axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";

const Serving = (props) => {
  const [qty, setqty] = useState(1);
  //   const { increase, decrease } = props.state;
  // console.log(props);
  const { item } = props;
  const updateCart = useStoreActions((action) => action.updateCart);
  const token = useStoreState((state) => state.token);

  return (
    <ButtonGroup size="large" aria-label="quantity-selector" color="secondary">
      <Button
        onClick={() => {
          setqty(qty - 1);
        }}
      >
        -
      </Button>
      <Button>{qty}</Button>
      <Button
        onClick={() => {
          setqty(qty + 1);
          updateCart({ item, token });
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
};

export default Serving;
