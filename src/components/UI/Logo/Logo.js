import React from "react";
import logo from "../../../assets/images/logo.svg";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = (props) => (
  <React.Fragment>
    <Link to="/" className={classes.Logo}>
      <img src={logo} className={classes.img} alt="ReactJS" />
    </Link>
  </React.Fragment>
);

export default Logo;
