import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs name="contact us" />
        <Container>
          <h1 style={{ textAlign: "center" }}>Contact us</h1>
        </Container>
      </React.Fragment>
    );
  }
}
