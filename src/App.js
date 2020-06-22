import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "./Store/Actions/product";
import Spinner from "./components/UI/Spinner/Spinner";
import Route from "./route";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return <React.Fragment>{loading ? <Spinner /> : <Route />}</React.Fragment>;
}

export default App;
