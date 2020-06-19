const initialState = {
  products: [],
  productsList: [],
  loading: false,
  proPerPage: 3,
  isSearch: true,
};

const productReducer = (state = initialState, action) => {
  const oldProductList = [...state.productsList];
  switch (action.type) {
    case "FETCH_PRODUCTS_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: [...action.payload.products],
        productsList: [...action.payload.products],
        loading: false,
      };
    case "FETCH_PRODUCTS_FAILED":
      return {
        ...state,
        loading: true,
      };
    case "SORT_BY_NAME":
      let sorted;
      if (action.sortType) {
        sorted = oldProductList.sort((a, b) => {
          let nameA = a.title.toLowerCase(),
            nameB = b.title.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      } else {
        sorted = oldProductList.sort((a, b) => {
          let nameA = a.title.toLowerCase(),
            nameB = b.title.toLowerCase();
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        });
      }

      return {
        ...state,
        productsList: [...sorted],
      };
    case "SORT_BY_PRICE":
      let sortedPrice;
      if (action.sortType) {
        sortedPrice = oldProductList.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        sortedPrice = oldProductList.sort((a, b) => {
          return b.price - a.price;
        });
      }
      return {
        ...state,
        productsList: [...sortedPrice],
      };
    case "SEARCH_FILTER":
      let resultsSearch = oldProductList.filter((item) =>
        item.category.toLowerCase().includes(action.searchTerm.toLowerCase())
      );
      if (resultsSearch.length < 1) {
        return {
          ...state,
          productsList: [...resultsSearch],
          isSearch: false,
        };
      }
      return {
        ...state,
        productsList: [...resultsSearch],
      };
    case "RESET_SEARCH_FILTER":
      return {
        ...state,
        productsList: [...state.products],
        isSearch: true,
      };

    case "SET_PRO_PER_PAGE":
      return {
        ...state,
        proPerPage: action.setNr,
      };
    default:
      return state;
  }
};

export default productReducer;
