import React from "react";
import { AppBar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../UI/Logo/Logo";
import ShopCartIcon from "../../UI/ShoppingCartIcon";
import Search from "../../UI/Search/Search";
import DrawerToggle from "../DrawerToggle";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function Toolbar(props) {
  const classes = useStyles();
  return (
    <AppBar color="inherit">
      <Container maxWidth="lg" className={classes.appBar}>
        <Logo />
        <div className="DesktopOnly">
          <NavigationItems />
        </div>
        <div className="navIcon">
          <Search />
          <ShopCartIcon />
          <DrawerToggle clicked={props.drawerToggle} />
        </div>
      </Container>
    </AppBar>
  );
}

export default Toolbar;
