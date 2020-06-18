import React from "react";
import { Typography, Breadcrumbs } from "@material-ui/core";
import { Storefront, Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    display: "flex",
    textDecoration: "none !important",
    color: "grey",
  },
  linkActive: {
    display: "flex",
    textDecoration: "none !important",
    color: "black !important",
    textTransform: "capitalize !important",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function BreadcrumbsNav(props) {
  const classes = useStyles();
  return (
    <div className="fullScreenBreadcrumb">
      <div className="breadcrumbs">
        <h1>Our {props.name}</h1>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link to="/" className={classes.link}>
            <Home className={classes.icon} />
            Home
          </Link>
          <Typography className={classes.linkActive}>
            <Storefront className={classes.icon} />
            {props.name}
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default BreadcrumbsNav;
