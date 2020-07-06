import React from "react";
import WishItem from "./WishItem";
import ErrorEmpty from "../../UI/ErrorEmpty";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Typography,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    // backgroundColor: "lightgrey",
  },
  wishlist: {
    marginTop: "25px",
  },
});

function Wishlist(props) {
  const classes = useStyles();
  // const { wishlist } = useSelector((state) => state.cart);
  const { wishlist } = props;

  console.log("wishlist.js");
  return (
    <Box component="div">
      <Box component="div" my={5} mx={2}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="h5" component="h5">
            My wishlist
          </Typography>
        </Box>
        <Divider />
        {wishlist.length > 0 ? (
          <TableContainer component={Paper} className={classes.wishlist}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell />

                  <TableCell component="th" scope="row">
                    Product
                  </TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">In Stock </TableCell>
                  <TableCell align="center">Cart</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wishlist.map((item) => {
                  return <WishItem key={item.id} item={item} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <ErrorEmpty errorName="Wishlist" />
        )}
      </Box>
    </Box>
  );
}

export default React.memo(Wishlist);
