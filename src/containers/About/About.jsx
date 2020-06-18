import React from "react";
import "./About.css";
import { Container } from "@material-ui/core";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";

function About() {
  return (
    <React.Fragment>
      <Breadcrumbs name="about" />
      <Container>
        <h1 style={{ textAlign: "center" }}>About </h1>
      </Container>
    </React.Fragment>
  );
}

export default About;
