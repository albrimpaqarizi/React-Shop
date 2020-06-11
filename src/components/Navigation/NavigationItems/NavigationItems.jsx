import React, { Component } from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

class NavigationItems extends Component {
  render() {
    return (
      <ul className="NavigationItems">
        <NavigationItem href="/">Home</NavigationItem>
        <NavigationItem href="/shop">Shop</NavigationItem>
        <NavigationItem href="/newArrivals">New Arrivals</NavigationItem>
        <NavigationItem href="/about">About </NavigationItem>
        <NavigationItem href="/contact">Contact Us</NavigationItem>
      </ul>
    );
  }
}

export default NavigationItems;
