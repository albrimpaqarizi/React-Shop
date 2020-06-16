import axios from "../axios";

const fetchProductsStarted = () => {
  return {
    type: "FETCH_PRODUCTS_STARTED",
  };
};
const fetchProductsSuccess = (payload) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: payload,
  };
};
const fetchProductsFailed = () => {
  return {
    type: "FETCH_PRODUCTS_FAILED",
  };
};

export const fetchAllProducts = () => async (dispatch) => {
  dispatch(fetchProductsStarted());
  try {
    const response = await axios.get("/products.json");
    console.log("test", response);
    if (response.data.length !== 0) {
      const payload = {
        products: response.data,
      };
      dispatch(fetchProductsSuccess(payload));
    } else {
      dispatch(fetchProductsFailed());
    }
  } catch (e) {
    dispatch(fetchProductsFailed());
  }
};
