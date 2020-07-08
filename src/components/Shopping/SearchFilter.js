import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, IconButton, InputBase, Divider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import { useInput } from "../../Hooks/useInput";

const useStyles = makeStyles((theme) => ({
  searchForm: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    // "&::hover": {
    //   border: 0,
    // }
  },
  iconButton: {
    padding: 8,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  iconClear: {
    fontSize: "1rem",
  },
}));

function SearchFilter(props) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm, resetTerm] = useInput();

  const searchFilterResult = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      props.searchFilter(searchTerm);
    }
    // resetTerm("");
  };
  const searchFilterClear = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      props.searchResetFilter();
    }
    resetTerm("");
  };

  return (
    <Paper component="form" className={classes.searchForm}>
      <InputBase
        value={searchTerm}
        className={classes.input}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onChange={setSearchTerm}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={searchFilterClear}
      >
        <ClearIcon className={classes.iconClear} />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={searchFilterResult}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default React.memo(SearchFilter);
