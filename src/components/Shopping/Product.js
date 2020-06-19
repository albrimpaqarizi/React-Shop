import React, { useState, useEffect } from "react";
import cardimg from "../../assets/images/img1.jpg";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cart";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  media: {
    height: "200px",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
  },
  cardActions: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  button: {
    "&:hover": {
      backgroundColor: "lightgrey !important ",
    },
  },
  iconButton: {
    color: "black",
  },
  iconActive: {
    color: "green !important",
  },
});

export default function Product(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inCart, setinCart] = useState(false);
  const cartList = useSelector((state) => state.cart.cart);
  const { id } = props.item;

  useEffect(() => {
    let isInCart = cartList.some((el) => {
      return el.product.id === id;
    });
    setinCart(isInCart);
  }, [cartList, id]);

  // const addItemToCart = (e) => {
  //   e.preventDefault();
  //   dispatch(addToCart(props.item));
  // };

  const ToCart = (e) => {
    e.preventDefault();
    if (inCart) {
      dispatch(removeFromCart(props.item.id));
    } else {
      dispatch(addToCart(props.item));
    }
  };

  return (
    <Grid item sm={6} md={4}>
      <Card>
        <Link to={`/shop/${id}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={cardimg}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Link>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" display="block" gutterBottom>
            {props.title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography variant="button" display="block" gutterBottom>
            {props.price} $
          </Typography>
          <IconButton
            aria-label="add to shopping cart"
            className={classes.button}
            onClick={ToCart}
          >
            <ShoppingBasketRoundedIcon
              fontSize="small"
              className={(classes.iconButton, inCart ? classes.iconActive : "")}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
