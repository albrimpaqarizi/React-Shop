import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useToggle } from "../UI/Hooks/useToggle";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    padding: "5px",
  },
}));

export default function PaginationShop(props) {
  const [open, setOpen] = useToggle(false);
  const classes = useStyles();

  return (
    <Box display="flex" my={2}>
      <Box width={1 / 4} mr="auto">
        <FormControl size="small" className={classes.formControl}>
          <Select
            open={open}
            onClose={setOpen}
            onOpen={setOpen}
            value={props.proPerPage}
            onChange={props.handleProPerPage}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
          <FormHelperText>Product per page</FormHelperText>
        </FormControl>
      </Box>
      <Pagination
        count={props.totalPage}
        page={props.currentPage}
        onChange={props.handleCurrentPage}
      />
    </Box>
  );
}
