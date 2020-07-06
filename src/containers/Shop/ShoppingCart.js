import React, { Fragment } from "react";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import "./Shop.css";
import Cart from "../../components/Shopping/Cart/Cart";
import Wishlist from "../../components/Shopping/Wishlist/Wishlist";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Box, Button, Typography, Divider } from "@material-ui/core";
// import { createSelector } from "reselect";

function ShoppingCart() {
  const { cart, wishlist } = useSelector((state) => state.cart);

  console.log("shopping cart.js");
  return (
    <Fragment>
      <Breadcrumbs name="Shopping Cart" />
      <Container>
        {cart.length > 0 || wishlist.length ? (
          <div>
            <Cart cart={cart} />
            <Divider />
            <Wishlist wishlist={wishlist} />
          </div>
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
            m={3}
          >
            <Typography variant="h3" component="h5">
              Wishlist and Cart are empty
            </Typography>
            <Button size="large" variant="contained">
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </Box>
        )}
      </Container>
    </Fragment>
  );
}

export default ShoppingCart;
