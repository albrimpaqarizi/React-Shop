import React from "react";
import "./About.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Container>
      <h1 className="my-5 text-center">About components</h1>
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        className={classes.margin}
      >
        <AddIcon />
      </Fab>
      <Fab
        size="medium"
        color="secondary"
        aria-label="add"
        className={classes.margin}
      >
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add" className={classes.margin}>
        <AddIcon />
      </Fab>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        className={classes.margin}
      >
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        className={classes.margin}
      >
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        className={classes.margin}
      >
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
    </Container>
  );
}

export default About;
