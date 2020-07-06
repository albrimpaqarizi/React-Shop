import React from "react";
import { MDBDropdownItem } from "mdbreact";
import { useToggle } from "../../Hooks/useToggle";
import { useDispatch } from "react-redux";

function SortItem(props) {
  const [isAscending, setAscending] = useToggle(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(props.sortAction(isAscending));
    setAscending();
  };
  console.log("sortitem.js");

  return (
    <MDBDropdownItem onClick={handleClick}>{props.sortBy}</MDBDropdownItem>
  );
}

export default SortItem;
