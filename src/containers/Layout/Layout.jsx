import React, { useState } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Navigation/Footer/Footer";
import { Drawer } from "@material-ui/core";
import Nav from "../../components/Navigation/NavigationItems/NavigationItems";
import classes from "./Layout.module.css";

function Layout(props) {
  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <React.Fragment>
      <Toolbar drawerToggle={toggleTrueFalse} />
      <Drawer open={isToggled} onClose={toggleTrueFalse}>
        <div className={classes.list}>
          <Nav drawerToggle={toggleTrueFalse} />
        </div>
      </Drawer>
      <main style={{ marginTop: "65px" }}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
