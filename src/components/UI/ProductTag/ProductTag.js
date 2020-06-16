import React from "react";

function ProductTag(props) {
  return (
    <li className="nav-item">
      {" "}
      <a className="btn py-2 px-3 rounded-pill" href="/">
        {props.tag}
      </a>
    </li>
  );
}

export default ProductTag;
