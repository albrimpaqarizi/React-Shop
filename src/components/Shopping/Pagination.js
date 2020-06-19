import React, { useEffect } from "react";
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
import { useInput } from "../UI/Hooks/useInput";
import { useDispatch } from "react-redux";
import { setProPerPage } from "../../actions/product";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    padding: "5px",
  },
}));

export default function PaginationShop(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useToggle(false);
  const [proPerPage, handleProPerPage] = useInput(props.proPerPage);

  useEffect(() => {
    dispatch(setProPerPage(proPerPage));
  }, [dispatch, proPerPage]);

  return (
    <Box display="flex" my={2}>
      <Box width={1 / 4} mr="auto">
        <FormControl size="small" className={classes.formControl}>
          <Select
            open={open}
            onClose={setOpen}
            onOpen={setOpen}
            value={proPerPage}
            onChange={handleProPerPage}
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
        showFirstButton
        showLastButton
        count={props.totalPage}
        page={props.currentPage}
        onChange={props.handleCurrentPage}
      />
    </Box>
  );
}
