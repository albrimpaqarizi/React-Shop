import React from "react";
import { MDBDropdownItem } from "mdbreact";
import { useToggle } from "../UI/Hooks/useToggle";
import { useDispatch } from "react-redux";

export default function PaginationShop(props) {
  const [isAscending, setAscending] = useToggle(true);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(props.sortAction(isAscending));
    setAscending();
  };
  return (
    <MDBDropdownItem onClick={handleClick}>{props.sortBy}</MDBDropdownItem>
  );
}
