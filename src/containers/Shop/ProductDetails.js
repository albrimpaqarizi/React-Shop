import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import cardimg from "../../assets/images/img1.jpg";
import {
  Container,
  Box,
  Grid,
  Card,
  Button,
  Typography,
} from "@material-ui/core";
import { addToCart, removeFromCart } from "../../Store/Actions/cart";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "50px 10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: "500px",
  },
  text: {
    marginBottom: "50px",
  },
  input: {
    width: "90px",
    marginRight: "20px",
  },
  button: {
    height: "46px",
  },
  iconActive: {
    backgroundColor: "green !important",
  },
}));

function ProductDetails(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [isExists, setIsExists] = useState(true);
  const [inCart, setinCart] = useState(false);
  const productsList = useSelector((state) => state.products.productsList);
  const cartList = useSelector((state) => state.cart.cart);
  const { id } = props.match.params;

  useEffect(() => {
    const existsProduct = productsList.some((item) => {
      return item.id.toString() === id;
    });
    setIsExists(existsProduct);

    if (existsProduct) {
      const findProduct = productsList.find((item) => {
        return item.id.toString() === id;
      });
      setProduct(findProduct);
    }
  }, [id, productsList]);

  useEffect(() => {
    let isInCart = cartList.some((el) => {
      return el.product.id.toString() === id;
    });
    setinCart(isInCart);
  }, [cartList, id]);

  // const addItemToCart = (e) => {
  //   e.preventDefault();
  //   dispatch(addToCart(product));
  // };

  const ToCart = (e) => {
    e.preventDefault();
    if (inCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <Fragment>
      <Breadcrumbs name="Product" />
      {isExists ? (
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Card>
                  <img src={cardimg} className={classes.media} alt="text" />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box ml={2}>
                <Typography variant="h5" gutterBottom className={classes.text}>
                  Name: {product && product.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.text}
                >
                  Description: {product && product.description}
                </Typography>
                <Typography
                  variant="button"
                  display="block"
                  gutterBottom
                  className={classes.text}
                >
                  Category: {product && product.category}
                </Typography>
                <Typography variant="button" display="block" gutterBottom>
                  InStock: [{product && product.inStock}]
                </Typography>
                <Typography variant="h5" gutterBottom className={classes.text}>
                  Price: {product && product.price} $
                </Typography>
                <Button
                  variant="contained"
                  // color="secondary"
                  className={(classes.button, inCart ? classes.iconActive : "")}
                  onClick={ToCart}
                >
                  Add to cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Redirect to="/404" />
      )}
    </Fragment>
  );
}

export default ProductDetails;
