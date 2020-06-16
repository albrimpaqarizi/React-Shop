import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Box } from "@material-ui/core";

export default function PaginationShop() {
  return (
    <Box display="flex" my={1}>
      <Box width={1 / 4} mr="auto">
        <select className="p-1 btn w-50 text-capitalize">
          <option value="2">Product 2</option>
          <option value="4">Product 4</option>
          <option value="6">Product 6</option>
          <option value="8">Product 8</option>
        </select>
      </Box>
      <Pagination count={10} />
    </Box>
  );
}
