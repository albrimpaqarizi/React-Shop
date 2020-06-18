import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";

export default class NewArrivals extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs name="New arrivals" />
        <Container>
          <h1 style={{ textAlign: "center" }}>New arrivals</h1>
        </Container>
      </React.Fragment>
    );
  }
}
