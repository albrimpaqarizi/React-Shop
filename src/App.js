import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Shop from "./containers/Shop/Shop";
import Contact from "./containers/Contact/Contact";
import NewArrivals from "./containers/NewArrivals/NewArrivals";
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
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/newArrivals" exact component={NewArrivals} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
