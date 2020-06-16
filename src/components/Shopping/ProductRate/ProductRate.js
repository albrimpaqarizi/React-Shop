import React from "react";
import img from "../../../assets/images/img1.jpg";
import "./ProductRate.css";

function ProductRate() {
  return (
    <li className="nav-item d-flex flex-row py-1 align-items-center">
      <img src={img} className="img" alt="Product" />
      <div className="pl-3">
        <a className="categories" href="#/">
          {" "}
          Name
        </a>
        <p className="m-0 py-1"> description </p>
      </div>
    </li>
  );
}

export default ProductRate;
