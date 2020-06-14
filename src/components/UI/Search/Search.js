import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import "./Search.css";

const search = (props) => {
  return (
    <div className="Search">
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default search;
