import React from "react";
import classes from "./Home.module.css";
import { Container, Fab } from "@material-ui/core";

function Home() {
  return (
    <div>
      <div className={classes.fullScreen}>
        <Container>
          <div className={classes.contentPhoto}>
            <h1>Furniture fit for the modern urban life. Start shopping.</h1>
            <p>
              Ekko is a fully packed practical tool of premium built and design
            </p>
            <Fab variant="extended" className={classes.extendedIcon}>
              Shop now
            </Fab>
          </div>
        </Container>
      </div>

      <div className={classes.fullScreenTwo}>
        <Container>
          <div className={classes.contentPhotoTwo}>
            <h1>Furniture fit for the modern urban life. Start shopping.</h1>
            <p>
              Ekko is a fully packed practical tool of premium built and design
            </p>
            <Fab variant="extended" className={classes.extendedIcon}>
              Shop now
            </Fab>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
