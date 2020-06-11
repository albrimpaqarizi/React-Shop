import React from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../UI/Logo/Logo";
import ShopCartIcon from "../../UI/ShoppingCartIcon";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
  },
});

function Toolbar() {
  const classes = useStyles();
  return (
    <AppBar color="inherit">
      <Container maxWidth="md" className={classes.appBar}>
        <Logo />
        <NavigationItems />
        <ShopCartIcon />
      </Container>
    </AppBar>
  );
}

export default Toolbar;
