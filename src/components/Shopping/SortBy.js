import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu } from "mdbreact";
import SortByItem from "./SortByItem";
import { sortByPrice, sortByName } from "../../Store/Actions/product";

function SortBy() {
  console.log("sort.js");
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color=" grey lighten-5">
        {" "}
        Default sort
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <SortByItem sortBy="AZ" sortAction={sortByName} />
        <SortByItem sortBy="Price" sortAction={sortByPrice} />
        {/* <SortByItem sortBy="Date" sortAction="SORT_BY_Date" /> */}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default React.memo(SortBy);
