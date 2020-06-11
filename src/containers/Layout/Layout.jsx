import React from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Navigation/Footer/Footer";

function Layout(props) {
  return (
    <React.Fragment>
      <Toolbar />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
