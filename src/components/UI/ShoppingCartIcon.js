import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  button: {
    "&:focus": {
      outline: "none !important",
    },
  },
});

const ShoppingCartIcon = () => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);

  return (
    <Link to="/cart">
      <IconButton aria-label="cart" className={classes.button}>
        <Badge badgeContent={cart.cart.length} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label="cart" className={classes.button}>
        <Badge badgeContent={cart.wishlist.length} color="secondary">
          <FavoriteIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default ShoppingCartIcon;
