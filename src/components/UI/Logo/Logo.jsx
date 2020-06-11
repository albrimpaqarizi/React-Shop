import React from "react";
import logo from "../../../assets/images/logo.svg";
import classes from "./Logo.module.css";

const Logo = (props) => (
  <React.Fragment>
    <a href="/" className={classes.Logo}>
      <img src={logo} className={classes.img} alt="ReactJS" />
    </a>
  </React.Fragment>
);

export default Logo;
