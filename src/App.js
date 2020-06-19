import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Shop from "./containers/Shop/Shop";
import Contact from "./containers/Contact/Contact";
import NewArrivals from "./containers/NewArrivals/NewArrivals";
import ShoppingCart from "./containers/Shop/ShoppingCart";
import ProductDetails from "./containers/Shop/ProductDetails";
import PageNotFound from "./containers/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./actions/product";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/about" exact render={() => <About />} />
            <Route path="/shop" exact render={() => <Shop />} />
            <Route path="/cart" exact render={() => <ShoppingCart />} />
            <Route path="/newArrivals" exact render={() => <NewArrivals />} />
            <Route path="/contact" exact render={() => <Contact />} />
            <Route
              path="/shop/:id"
              exact
              render={(routeProps) => (
                <ProductDetails
                  // id={routeProps.match.params.id}
                  {...routeProps}
                />
              )}
            />
            <Route to="/404" render={() => <PageNotFound />} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
