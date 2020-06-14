import React, { Component } from "react";
import classes from "./Footer.module.css";
import Container from "@material-ui/core/Container";
import SocialMedia from "../../UI/SocialMedia/SocialMedia";
import { Link } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <Container>
          <div className={classes.footerNav}>
            <div className={classes.NavigationItems}>
              <Link to="/" className={classes.NavigationItem}>
                Home
              </Link>
              <Link to="/shop" className={classes.NavigationItem}>
                Shop
              </Link>
              <Link to="/about" className={classes.NavigationItem}>
                About
              </Link>
              <Link to="/contact" className={classes.NavigationItem}>
                Contact Us
              </Link>
            </div>
            <SocialMedia />
          </div>
          <div className={classes.footerContent}>
            <div className={classes.footerAbout}>
              <h3> About</h3>
              <ul>
                <li>
                  <Link to="/">About us </Link>
                </li>
                <li>
                  <Link to="/">Our shop </Link>
                </li>
                <li>
                  <Link to="/">Job opportunities </Link>
                </li>
                <li>
                  <Link to="/">Calendar of events </Link>
                </li>
                <li>
                  <Link to="/">Location </Link>
                </li>
              </ul>
            </div>
            <div className={classes.footerAbout}>
              <h3> Additional links</h3>
              <ul>
                <li>
                  <Link to="/">Services </Link>
                </li>
                <li>
                  <Link to="/">Terms and conditions </Link>
                </li>
                <li>
                  <Link to="/">Privacy policy </Link>
                </li>
                <li>
                  <Link to="/">News</Link>
                </li>
                <li>
                  <Link to="/">Contact us </Link>
                </li>
              </ul>
            </div>
            <div className={classes.footerAbout}>
              <h3> Categories</h3>
              <ul>
                <li>
                  <Link to="/">Creative </Link>
                </li>
                <li>
                  <Link to="/">General </Link>
                </li>
                <li>
                  <Link to="/">Insights </Link>
                </li>
                <li>
                  <Link to="/">Tech</Link>
                </li>
                <li>
                  <Link to="/">World </Link>
                </li>
              </ul>
            </div>
            <div className={classes.footerAbout}>
              <h3> React JS</h3>
              <p>
                Praesent bibendum sapien vitae dolor consectetur, ut cursus sem
                fringilla. Suspendisse a tellus sapien. Donec metus elit, dictum
                nec tellus vel, euismod dictum ex. Nunc eros lacus, tempus id
                aliquam vitae, efficitur sed felis.
              </p>
            </div>
          </div>
        </Container>
        <div className={classes.footerBottom}>
          <p>Ekko by KeyDesign. All rights reserved</p>
        </div>
      </div>
    );
  }
}
