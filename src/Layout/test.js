// ! PRAKHAR SEE THIS

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles(theme => ({
  root: {
    color: "black",
    backgroundColor: "brown",   // ? Here you put your CSS ( its in CamelCase form but everything works
    alignItems: "center"        // ? as intended, just in camelCase )
  }                             // ALSO no need for semicolons now, comma works, rest you can see
}))(Button); // ? Basically component on which you will use this styling

export default function CustomizedButtons() {
  return (
    <div>
      <ColorButton variant="contained" color="primary">
        Custom CSS
      </ColorButton>
    </div>
  );
}
