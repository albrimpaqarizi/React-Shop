import React from "./node_modules/react";
import SearchIcon from "./node_modules/@material-ui/icons/Search";
import { IconButton } from "./node_modules/@material-ui/core";

const search = (props) => {
  return (
    <React.Fragment>
      <div>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

export default search;
