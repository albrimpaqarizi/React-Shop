import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import "./DrawerToggle.css";

const DrawerToggle = (props) => (
  <div className="DrawerToggle">
    <IconButton onClick={props.clicked}>
      <DehazeIcon />
    </IconButton>
  </div>
);

export default DrawerToggle;
