import React from "react";

function ProductTag(props) {
  return (
    <li className="nav-item">
      {" "}
      <a className="btn  rounded-pill" href="/">
        {props.tag}
      </a>
    </li>
  );
}

export default ProductTag;
