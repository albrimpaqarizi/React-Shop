import React from "react";
import { Typography, Breadcrumbs } from "@material-ui/core";
import { Storefront, Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
    color: "black !important",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function BreadcrumbsNav() {
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      <Link to="/" className={classes.link}>
        <Home className={classes.icon} />
        Home
      </Link>
      <Typography className={(classes.link, classes.linkActive)}>
        <Storefront className={classes.icon} />
        Shop
      </Typography>
      {/* </div> */}
    </Breadcrumbs>
  );
}

export default BreadcrumbsNav;
