import React from "react";
import img from "../../assets/images/img1.jpg";
import { ListItem, Box, Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    width: "65px",
    height: "65px",
    marginRight: "3px",
  },
  list: {
    display: "flex",
    flexFlow: "row",
    alignContent: "center",
  },
});

function ProductRate(props) {
  const classes = useStyles();
  const { id, title, category } = props.item;
  return (
    <ListItem className={classes.list}>
      {/* <CardMedia className={classes.media}> */}
      <Link to={`/shop/${id}`}>
        <Avatar
          className={classes.media}
          variant="square"
          alt="Product"
          src={img}
        />
      </Link>
      {/* </CardMedia> */}
      <Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          {category}
        </Typography>
      </Box>
    </ListItem>
  );
}

export default React.memo(ProductRate);
