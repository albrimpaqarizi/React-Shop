import React from "react";
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

function route() {
  return (
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
            render={(routeProps) => <ProductDetails {...routeProps} />}
          />
          <Route to="/404" render={() => <PageNotFound />} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default route;
