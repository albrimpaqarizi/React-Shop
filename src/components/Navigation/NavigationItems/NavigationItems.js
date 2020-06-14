import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationItems(props) {
  return (
    <ul className="NavigationItems">
      <NavigationItem clicked={props.drawerToggle} link="/">
        Home
      </NavigationItem>
      <NavigationItem clicked={props.drawerToggle} link="/shop">
        Shop
      </NavigationItem>
      <NavigationItem clicked={props.drawerToggle} link="/newArrivals">
        New Arrivals
      </NavigationItem>
      <NavigationItem clicked={props.drawerToggle} link="/about">
        About{" "}
      </NavigationItem>
      <NavigationItem clicked={props.drawerToggle} link="/contact">
        Contact Us
      </NavigationItem>
    </ul>
  );
}

export default NavigationItems;
