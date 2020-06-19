import React from "react";
import "./ProductCategories.css";

function ProductCategories(props) {
  return (
    <li className="nav-item">
      <a className="categories" href="/">
        {props.name}
      </a>
    </li>
  );
}

export default ProductCategories;
