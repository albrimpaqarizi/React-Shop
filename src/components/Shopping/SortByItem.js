import React from "react";
import { MenuItem, ListItemIcon } from "@material-ui/core";
import { useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function SortItem(props) {
  const dispatch = useDispatch();
  const { sortAction, handleClose, setToggle, isAscending } = props;

  const handleClick = () => {
    dispatch(sortAction(isAscending));
    setToggle();
    handleClose();
  };

  return (
    <MenuItem onClick={handleClick}>
      <ListItemIcon>
        {isAscending ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ListItemIcon>
      {props.sortBy}
    </MenuItem>
  );
}

export default SortItem;
