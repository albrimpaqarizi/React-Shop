import React from "react";
import "./Search.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  searchForm: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 8,
  },
}));

export default function Search(props) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.searchForm}>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onChange={props.setSearchTerm}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
