import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";
import SortByItem from "./SortByItem";

export default function SortBy(props) {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color=" grey lighten-5">
        {" "}
        Default sort
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <SortByItem sortBy="AZ" sortAction="SORT_BY_NAME" />
        <SortByItem sortBy="Price" sortAction="SORT_BY_PRICE" />
        <SortByItem sortBy="Date" sortAction="SORT_BY_Date" />
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
