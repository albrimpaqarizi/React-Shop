import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
// import { makeStyles } from "@material-ui/core/styles";
import Pagination from "../../components/Shopping/Pagination";
import Product from "../../components/Shopping/Product/Product";
import ProductRate from "../../components/Shopping/ProductRate/ProductRate";
import ProductCategories from "../../components/Shopping/ProductCategories/ProductCategories";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import ProductTag from "../../components/UI/ProductTag/ProductTag";
import Search from "../../components/UI/Search/Search";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";

import "./Shop.css";
import { fetchAllProducts } from "../../actions/product";

function Shop() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log("product ", products);
  const getProducts = () => {
    dispatch(fetchAllProducts());
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="fullScreenBreadcrumb">
        <div className="breadcrumbs">
          <h1>Our Products</h1>
          <Breadcrumbs />
        </div>
      </div>
      <Container>
        <div className="row ">
          <div className="col-sm-12 col-md-3">
            <div className="my-3 mb-5">
              <Search />
              <button className="btn" onClick={getProducts}>
                Kliko
              </button>
            </div>

            <div className="my-3 mb-5">
              <h4 className="titleCategories">Product categories</h4>
              <ul className="nav flex-column ">
                <ProductCategories />
                <ProductCategories />
              </ul>
            </div>

            <div className="my-3 mb-5">
              <h4 className="titleCategories">Product tags</h4>
              <ul className="nav flex ">
                <ProductTag tag="Accessories" />
                <ProductTag tag="Electronics" />
                <ProductTag tag="Fashion" />
                <ProductTag tag="sport" />
                <ProductTag tag="girls" />
              </ul>
            </div>

            <div className="my-3 mb-5">
              <h4 className="titleCategories">Top rated products</h4>
              <ul className="nav flex-column ">
                <ProductRate />
                <ProductRate />
              </ul>
            </div>
          </div>

          <div className="col-sm-12 col-md-9">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <div className="col-12">
                <div className="d-flex justify-content-between py-3">
                  <h4 className="showResult py-2 ">
                    Showing result
                    {/* {indexOfFirstPost + 1}–{indexOfLastPost + 1} of{" "} */}
                    {/* {this.props.productsDB.length}  */}
                  </h4>
                  <MDBDropdown>
                    <MDBDropdownToggle caret color=" grey lighten-5">
                      {" "}
                      Default sort
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      <MDBDropdownItem>AZ</MDBDropdownItem>
                      <MDBDropdownItem>Date</MDBDropdownItem>
                      <MDBDropdownItem>Price</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </div>
              </div>
              <Grid container spacing={3}>
                {products.loading ? (
                  <Spinner />
                ) : (
                  products.products.map((item) => {
                    return <Product key={item.id} title={item.title} />;
                  })
                )}
              </Grid>
              <Grid item xs>
                <Pagination
                // productPerPage={this.state.productPerPage}
                // totalProduct={this.props.productsDB.length}
                // paginate={this.paginate}
                // currentPage={this.state.currentPage}
                // proPerPage={this.proPerPage}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Shop;
