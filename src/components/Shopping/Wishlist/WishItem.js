import React from "react";
import images from "../../../assets/images/img1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { TableRow, TableCell, IconButton, Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist, addToCart } from "../../../Store/Actions/cart";
import { useExists } from "../../Hooks/useExists";

const useStyles = makeStyles({
  icon: {
    "&:hover": {
      color: "red !important ",
    },
    color: "black",
  },
});

export default function WishItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cart);
  const { id, title, price, inStock } = props.item;
  const [inCart] = useExists(cartList, id);

  const addItemToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(props.item));
  };
  const removeItemFromWishlist = (e) => {
    e.preventDefault();
    dispatch(removeFromWishlist(id));
  };
  return (
    <TableRow hover={true}>
      <TableCell size="small" align="center" padding="none">
        <IconButton
          className={classes.iconButton}
          onClick={removeItemFromWishlist}
        >
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </TableCell>
      <TableCell size="small" align="center" padding="none">
        <Avatar variant="square" alt="Product" src={images} />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell align="center">{price} $</TableCell>
      <TableCell align="center">{inStock}</TableCell>
      <TableCell align="center">
        <IconButton
          onClick={addItemToCart}
          disabled={inStock === 0 || inCart ? true : false}
        >
          <ShoppingBasketIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
