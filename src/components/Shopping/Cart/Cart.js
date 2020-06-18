import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    // backgroundColor: "lightgrey",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent ",
    },
  },
  icon: {
    "&:hover": {
      color: "red !important ",
    },
    color: "black",
  },
  button: {
    marginLeft: "50px",
  },
});

function Cart(props) {
  const classes = useStyles();
  const cartList = useSelector((state) => state.cart.cart);

  return (
    <Box component="div">
      <Box component="div" my={5} mx={2}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell />

                <TableCell component="th" scope="row">
                  Product
                </TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity </TableCell>
                <TableCell align="center">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartList.map((item) => {
                return (
                  <CartItem
                    key={item.product.id}
                    item={item.product}
                    quantity={item.quantity}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        my={5}
        mx={2}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField
            id="outlined-secondary"
            label="Cupon code"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="medium"
          >
            Apply cupon
          </Button>
        </Box>
        <Button variant="contained" color="secondary" size="medium">
          Update Cart
        </Button>
      </Box>

      <div className="divCheckout">
        <h4 className="cartTotal">Cart totals</h4>
        <table className="d-flex table table-borderless">
          <tbody>
            <tr>
              <th className="tbTH">Subtotal</th>
              <td>400$</td>
            </tr>
            <tr>
              <th className="tbTH">Total</th>
              <td>45 $</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  type="button"
                  className="btn btn-success rounded-pill text-capitalize float-right"
                >
                  Proceed to checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );
}

export default Cart;
