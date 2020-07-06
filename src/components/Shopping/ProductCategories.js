import React from "react";
import "./ProductCategories.css";
import { ListItem, ListItemText } from "@material-ui/core";

function ProductCategories(props) {
  console.log("product categories.js");
  return (
    <ListItem>
      <ListItemText>{props.name}</ListItemText>
    </ListItem>
  );
}

export default React.memo(ProductCategories);
