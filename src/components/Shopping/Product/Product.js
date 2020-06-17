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
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import "./Product.css";

const useStyles = makeStyles({
  media: {
    height: "200px",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
  },
  cardActions: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  button: {
    "&:hover": {
      backgroundColor: "lightgrey !important ",
    },
  },
  iconButton: {
    color: "black",
  },
});

export default function Product(props) {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cardimg}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" display="block" gutterBottom>
            {props.title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography variant="button" display="block" gutterBottom>
            {props.price} $
          </Typography>
          <IconButton
            aria-label="add to shopping cart"
            className={classes.button}
          >
            <ShoppingBasketRoundedIcon
              fontSize="small"
              className={classes.iconButton}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
