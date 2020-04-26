import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

const Serving = (props) => {
//   const { increase, decrease } = props.state;
  console.log(props);

  return (
    <ButtonGroup size="small" aria-label="quantity-selector">
      <Button onClick={props.increase}>+</Button>
      <Button>{props.value}</Button>
      <Button onClick={props.increase}>-</Button>
    </ButtonGroup>
  );
};

export default Serving;
