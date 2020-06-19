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
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  inCreaseQty,
  deCreaseQty,
} from "../../../actions/cart";

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
  const dispatch = useDispatch();
  const { id, title, price, inStock } = props.item;

  const inCreaseQtyItem = (e) => {
    e.preventDefault();
    dispatch(inCreaseQty(id));
  };

  const deCreaseQtyItem = (e) => {
    e.preventDefault();
    dispatch(deCreaseQty(id));
  };

  const removeItemFromCart = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };
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
            {props.quantity}
          </Typography>
          <IconButton
            onClick={inCreaseQtyItem}
            disabled={props.quantity < inStock ? false : true}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </TableCell>
      <TableCell align="center">
        {(props.quantity * price).toFixed(2)} $
      </TableCell>
    </TableRow>
  );
}

export default CartItem;
