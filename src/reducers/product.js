const initialState = {
  products: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        products: [...action.payload.products],
        loading: false,
      };
    case "FETCH_PRODUCTS_FAILED":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default productReducer;
