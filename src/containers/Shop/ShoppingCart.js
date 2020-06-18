import React from "react";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import "./Shop.css";
import Cart from "../../components/Shopping/Cart/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Box, Button, Typography } from "@material-ui/core";

function ShoppingCart() {
  const cartList = useSelector((state) => state.cart.cart);

  return (
    <React.Fragment>
      <Breadcrumbs name="cart" />
      <Container>
        {cartList.length > 0 ? (
          <Cart />
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Typography variant="h3" component="h5">
              Cart is empty
            </Typography>
            <Button size="large" variant="contained">
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </Box>
        )}
      </Container>
    </React.Fragment>
  );
}

export default ShoppingCart;
