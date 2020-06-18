import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  button: {
    "&:focus": {
      outline: "none !important",
    },
  },
});

const ShoppingCartIcon = () => {
  const classes = useStyles();
  const cartList = useSelector((state) => state.cart.cart);

  return (
    <Link to="/cart">
      <IconButton aria-label="cart" className={classes.button}>
        <Badge badgeContent={cartList.length} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default ShoppingCartIcon;
