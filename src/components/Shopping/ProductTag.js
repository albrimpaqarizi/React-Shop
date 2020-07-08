import React from "react";
import { ListItem, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  listItem: {
    width: "auto",
    padding: "7px",
  },
});

function ProductTag(props) {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem}>
      <Fab variant="extended" size="medium" aria-label="tag">
        {props.tag}
      </Fab>
    </ListItem>
  );
}

export default ProductTag;
