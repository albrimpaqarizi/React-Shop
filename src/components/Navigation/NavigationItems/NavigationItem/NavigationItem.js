import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        exact
        to={props.link}
        activeClassName={classes.active}
        onClick={props.clicked}
        style={{ textDecoration: "none" }}
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
