import React from "react";
import images from "../../../assets/images/img1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  Box,
  TableRow,
  TableCell,
  IconButton,
  Avatar,
  Typography,
} from "@material-ui/core";
import {
  removeFromCart,
  inCreaseQty,
  deCreaseQty,
} from "../../../Store/Actions/cart";
// import { useDispatch } from "react-redux";
import { useActions } from "../../../Hooks/useActions";

const useStyles = makeStyles({
  icon: {
    "&:hover": {
      color: "red !important ",
    },
    color: "black",
  },
});

function CartItem(props) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const { id, title, price, inStock, quantity } = props.item;
  const inCreaseQtyItem = useActions(inCreaseQty, id);
  const deCreaseQtyItem = useActions(deCreaseQty, id);
  const removeItemFromCart = useActions(removeFromCart, id);

  // const inCreaseQtyItem = (e) => {
  //   e.preventDefault();
  //   dispatch(inCreaseQty(id));
  // };
  // const deCreaseQtyItem = (e) => {
  //   e.preventDefault();
  //   dispatch(deCreaseQty(id));
  // };

  // const removeItemFromCart = (e) => {
  //   e.preventDefault();
  //   dispatch(removeFromCart(id));
  // };
  console.log("cart item.js");

  return (
    <TableRow hover={true}>
      <TableCell size="small" align="center" padding="none">
        <IconButton className={classes.iconButton} onClick={removeItemFromCart}>
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </TableCell>
      <TableCell size="small" align="center" padding="none">
        <Avatar variant="square" alt="Product" src={images} />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell align="center">{price} $</TableCell>
      <TableCell align="center">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <IconButton onClick={deCreaseQtyItem}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="button" gutterBottom>
            {quantity}
          </Typography>
          <IconButton
            onClick={inCreaseQtyItem}
            disabled={quantity < inStock ? false : true}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </TableCell>
      <TableCell align="center">{(quantity * price).toFixed(2)} $</TableCell>
    </TableRow>
  );
}

export default CartItem;
