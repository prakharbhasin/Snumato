import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

const Serving = (props) => {
//   const { increase, decrease } = props.state;
  console.log(props);

  return (
    <ButtonGroup size="large" aria-label="quantity-selector" color="secondary">
      <Button onClick={props.decrease} >-</Button>
      <Button>{props.value}</Button>
      <Button onClick={props.increase}>+</Button>
    </ButtonGroup>
  );
};

export default Serving;
