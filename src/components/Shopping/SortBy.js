import React, { useState } from "react";
import SortByItem from "./SortByItem";
import { Button, Popover } from "@material-ui/core";
import { sortByPrice, sortByName } from "../../Store/Actions/product";
import { useToggle } from "../../Hooks/useToggle";

function SortBy() {
  const [az, setAz] = useToggle(true);
  const [price, setPrice] = useToggle(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Default sort
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SortByItem
          setToggle={setAz}
          isAscending={az}
          handleClose={handleClose}
          sortBy="AZ"
          sortAction={sortByName}
        />
        <SortByItem
          setToggle={setPrice}
          isAscending={price}
          handleClose={handleClose}
          sortBy="Price"
          sortAction={sortByPrice}
        />
      </Popover>
    </div>
  );
}

export default React.memo(SortBy);
