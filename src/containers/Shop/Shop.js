import React, { useState } from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import Pagination from "../../components/Shopping/Pagination";
import SortBy from "../../components/Shopping/SortBy";
import Product from "../../components/Shopping/Product/Product";
import ProductRate from "../../components/Shopping/ProductRate/ProductRate";
import ProductCategories from "../../components/Shopping/ProductCategories/ProductCategories";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import ProductTag from "../../components/UI/ProductTag/ProductTag";
import Search from "../../components/Shopping/SearchFilter";
import { useSelector, useDispatch } from "react-redux";
import { useInput } from "../../components/UI/Hooks/useInput";

import "./Shop.css";

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [proPerPage, handleProPerPage] = useInput(3);
  // const [searchResults, setSearchResults] = useState([]);
  const productsList = products.productsList;

  const changeCurrentPage = (event, value) => {
    setCurrentPage(value);
  };

  // useEffect(() => {
  //   const results = products.products.filter((item) =>
  //     item.title.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm, products]);

  const searchFilter = (searchText) => {
    dispatch({ type: "SEARCH_FILTER", searchTerm: searchText });
    // setSearchResults(results);
    setCurrentPage(1);
    console.log("search term ", searchText);
  };

  const searchDefaultFilter = () => {
    dispatch({ type: "RESET_SEARCH_FILTER" });
    // setSearchResults(products.products);
    setCurrentPage(1);
  };

  const productsTotal = productsList.length;
  const totalPage = Math.ceil(productsTotal / proPerPage);
  let indexCalculation =
    proPerPage > productsTotal ? productsTotal : proPerPage;
  const indexOfLast = currentPage * indexCalculation;
  const indexOfFirst = indexOfLast - indexCalculation;

  // console.log("search result ", searchResults);
  // console.log("shop product ", products.productsList);
  // console.log("index first ", indexOfFirst, indexOfLast);

  return (
    <div>
      <div className="fullScreenBreadcrumb">
        <div className="breadcrumbs">
          <h1>Our Products</h1>
          <Breadcrumbs />
        </div>
      </div>
      <Container>
        <Box display="flex" flexWrap="wrap">
          <Grid item xs={12} md={3}>
            <Box component="div" mt={3} mb={5}>
              <Search
                searchDefaultFilter={searchDefaultFilter}
                searchFilter={searchFilter}
              />
            </Box>

            <Box component="div" mt={3} mb={5}>
              <h4 className="titleCategories">Product categories</h4>
              <ul className="nav flex-column ">
                <ProductCategories />
                <ProductCategories />
              </ul>
            </Box>

            <Box component="div" mt={3} mb={5}>
              <h4 className="titleCategories">Product tags</h4>
              <ul className="nav flex ">
                <ProductTag tag="Accessories" />
                <ProductTag tag="Electronics" />
                <ProductTag tag="Fashion" />
                <ProductTag tag="sport" />
                <ProductTag tag="girls" />
              </ul>
            </Box>

            <Box component="div" mt={3} mb={5}>
              <h4 className="titleCategories">Top rated products</h4>
              <ul className="nav flex-column ">
                <ProductRate />
                <ProductRate />
              </ul>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Box
                width={1}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                my={2}
              >
                <Typography variant="h6" component="h5">
                  Showing {""}
                  {indexOfFirst + 1}–{indexOfLast + 1} of {""}
                  {productsTotal} result
                </Typography>
                <SortBy />
              </Box>
              <Grid container spacing={3}>
                {productsList.slice(indexOfFirst, indexOfLast).map((item) => {
                  return (
                    <Product
                      key={item.id}
                      title={item.title}
                      price={item.price}
                    />
                  );
                })}
              </Grid>
              <Grid item xs>
                <Pagination
                  handleCurrentPage={changeCurrentPage}
                  currentPage={currentPage}
                  totalPage={totalPage}
                  proPerPage={proPerPage}
                  handleProPerPage={handleProPerPage}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Shop;
