import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Shop from "./containers/Shop/Shop";
import Contact from "./containers/Contact/Contact";
import NewArrivals from "./containers/NewArrivals/NewArrivals";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
