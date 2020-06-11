import React from "react";
import { Badge, IconButton } from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const ShoppingCartIcon = () => {
  return (
    <a href="/cart">
      <IconButton aria-label="cart">
        <Badge badgeContent={5} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
    </a>
  );
};

export default ShoppingCartIcon;
