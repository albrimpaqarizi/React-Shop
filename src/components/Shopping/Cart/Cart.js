import React from "react";
import CartItem from "./CartItem";
import ErrorEmpty from "../../UI/ErrorEmpty";
import TotalAmount from "./TotalAmount";
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
  Divider,
  Typography,
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
  // const cartList = useSelector((state) => state.cart.cart);
  const cartList = props.cart;

  console.log("cart.js");
  return (
    <Box component="div">
      <Box component="div" my={5} mx={2}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="h5" component="h5">
            My Cart
          </Typography>
        </Box>
        <Divider />
        {cartList.length > 0 ? (
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
                  return <CartItem key={item.id} item={item} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <ErrorEmpty errorName="Cart" />
        )}
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

      <Box display="flex" justifyContent="start" alignItems="center">
        <TotalAmount cartList={cartList} />
      </Box>
    </Box>
  );
}

export default React.memo(Cart);
