import React from "react";
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
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
} from "../../Store/Actions/cart";
import { Link } from "react-router-dom";
import { useExists } from "../../Hooks/useExists";

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
  const { cart, wishlist } = useSelector((state) => state.cart);
  const { id } = props.item;
  const [inCart] = useExists(cart, id);
  const [inWishlist] = useExists(wishlist, id);

  const ToCart = (e) => {
    e.preventDefault();
    if (inCart) {
      dispatch(removeFromCart(props.item.id));
    } else {
      dispatch(addToCart(props.item));
    }
  };

  const ToWishlist = (e) => {
    e.preventDefault();
    if (inWishlist) {
      dispatch(removeFromWishlist(props.item.id));
    } else {
      dispatch(addToWishlist(props.item));
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

          <IconButton
            aria-label="add to wishlist"
            className={classes.button}
            onClick={ToWishlist}
          >
            <FavoriteIcon
              fontSize="small"
              className={
                (classes.iconButton, inWishlist ? classes.iconActive : "")
              }
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
