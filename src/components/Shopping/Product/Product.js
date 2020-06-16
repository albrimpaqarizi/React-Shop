import React from "react";
import cardimg from "../../../assets/images/img1.jpg";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Product.css";

const useStyles = makeStyles({
  media: {
    height: "200px",
  },
  button: {
    "&:focus": {
      outline: "none !important",
    },
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
  },
});

export default function Product(props) {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={4}>
      <Card>
        <CardActionArea className={classes.button}>
          <CardMedia
            className={classes.media}
            image={cardimg}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h4">
            {props.title}
          </Typography>
          <IconButton
            aria-label="add to shopping cart"
            className={classes.button}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
}
