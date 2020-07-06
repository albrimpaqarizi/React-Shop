import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, IconButton, InputBase, Divider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import { useInput } from "../../Hooks/useInput";
import { searchFilter, searchResetFilter } from "../../Store/Actions/product";
import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const { isSearch } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm, resetTerm] = useInput();

  const searchFilterResult = (e) => {
    e.preventDefault();
    dispatch(searchFilter(searchTerm));
    props.setCurrentPage(1);
  };

  const searchFilterClear = (e) => {
    e.preventDefault();
    dispatch(searchResetFilter());
    props.setCurrentPage(1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchResetFilter());
      props.setCurrentPage(1);
      console.log("This will run after 3 second!");
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSearch, dispatch]);

  // const searchFilterResult = (e) => {
  //   e.preventDefault();
  //   if (searchTerm !== "") {
  //     props.searchFilter(searchTerm);
  //   }
  //   // resetTerm("");
  // };
  // const searchFilterClear = (e) => {
  //   e.preventDefault();
  //   props.searchResetFilter();
  //   resetTerm("");
  // };
  console.log("search.js");
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
