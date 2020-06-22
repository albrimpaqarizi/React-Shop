import React, { useState, useEffect } from "react";
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
import { searchFilter, searchResetFilter } from "../../Store/Actions/product";

import "./Shop.css";

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const proPerPage = cart.proPerPage;

  const [currentPage, setCurrentPage] = useState(1);
  const productsList = products.productsList;

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

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchResetFilter());
      setCurrentPage(1);
      console.log("This will run after 3 second!");
    }, 3000);
    return () => clearTimeout(timer);
  }, [products.isSearch, dispatch]);
  console.log("shop.js");

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
                <ProductCategories name="Electronics" />
                <ProductCategories name="Accessories" />
                <ProductCategories name="Fashion" />
                <ProductCategories name="Sport" />
              </ul>
            </Box>

            <Box component="div" mt={3} mb={5}>
              <h4 className="titleCategories">Product tags</h4>
              <ul className="nav flex ">
                <ProductTag tag="Iphone X" />
                <ProductTag tag="Galaxy M10" />
                <ProductTag tag="HM T-Shirt White" />
                <ProductTag tag="Iphone 8" />
                <ProductTag tag="Note 9" />
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
                {products.isSearch ? (
                  productsList.slice(indexOfFirst, indexOfLast).map((item) => {
                    return (
                      <Product
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        item={item}
                      />
                    );
                  })
                ) : (
                  <Box
                    width={1}
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    textAlign="center"
                    m={5}
                  >
                    <Typography variant="h6" component="h5">
                      No product, please search again with another word!
                    </Typography>
                  </Box>
                )}
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
