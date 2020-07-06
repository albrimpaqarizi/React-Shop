import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, Button } from "@material-ui/core";

const TotalAmount = (props) => {
  const [total, settotal] = useState(0);
  const { cartList } = props;

  useEffect(() => {
    const totalAmount = cartList.reduce((prevPrice, item) => {
      return prevPrice + item.price * item.quantity;
    }, 0);
    settotal(totalAmount);
    console.log("total amount");
  }, [cartList]);

  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <Typography variant="h5" component="h5">
          Subtotal: 200$
        </Typography>
      </ListItem>
      <ListItem button>
        <Typography variant="h5" component="h5">
          Total: {""} {total.toFixed(2)}
        </Typography>
      </ListItem>
      <Button variant="contained" color="secondary" size="medium">
        Checkout
      </Button>
    </List>
  );
};

export default React.memo(TotalAmount);
