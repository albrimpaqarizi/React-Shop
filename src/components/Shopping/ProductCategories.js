import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

function ProductCategories(props) {
  return (
    <ListItem>
      <ListItemText>{props.name}</ListItemText>
    </ListItem>
  );
}

export default React.memo(ProductCategories);
