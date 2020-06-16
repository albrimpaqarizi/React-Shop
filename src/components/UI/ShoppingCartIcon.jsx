import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    "&:focus": {
      outline: "none !important",
    },
  },
});

const ShoppingCartIcon = () => {
  const classes = useStyles();

  return (
    <a href="/cart">
      <IconButton aria-label="cart" className={classes.button}>
        <Badge badgeContent={5} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </a>
  );
};

export default ShoppingCartIcon;
