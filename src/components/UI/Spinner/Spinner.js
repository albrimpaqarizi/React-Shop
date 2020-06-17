import React from "react";
import classes from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={classes.root}>
      <div className={classes.loader}>Loading...</div>
    </div>
  );
}
