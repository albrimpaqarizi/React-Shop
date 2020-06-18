import React, { useState } from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import Pagination from "../../components/Shopping/Pagination";
import SortBy from "../../components/Shopping/SortBy";
import Product from "../../components/Shopping/Product";
import ProductRate from "../../components/Shopping/ProductRate";
import ProductCategories from "../../components/Shopping/ProductCategories";
import ProductTag from "../../components/UI/ProductTag/ProductTag";
import Search from "../../components/Shopping/SearchFilter";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import { useSelector, useDispatch } from "react-redux";
import { searchFilter, searchResetFilter } from "../../actions/product";

import "./Shop.css";

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsList = products.productsList;
  const proPerPage = products.proPerPage;

  const changeCurrentPage = (event, value) => {
    setCurrentPage(value);
  };

  const searchFilterShop = (searchTerm) => {
    dispatch(searchFilter(searchTerm));
    setCurrentPage(1);
  };

  const searchResetFilterShop = () => {
    dispatch(searchResetFilter());
    setCurrentPage(1);
  };

  const productsTotal = productsList.length;
  const totalPage = Math.ceil(productsTotal / proPerPage);
  let indexCalculation =
    proPerPage > productsTotal ? productsTotal : proPerPage;
  const indexOfLast = currentPage * indexCalculation;
  const indexOfFirst = indexOfLast - indexCalculation;

  return (
    <div>
      <Breadcrumbs name="shop" />
      <Container>
        <Box display="flex" flexWrap="wrap">
          <Grid item xs={12} md={3}>
            <Box component="div" mt={3} mb={5}>
              <Search
                searchResetFilter={searchResetFilterShop}
                searchFilter={searchFilterShop}
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
                      item={item}
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
