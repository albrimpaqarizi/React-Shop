const initialState = {
  cart: [],
  wishlist: [],
  proPerPage: 3,
};

const cartReducer = (state = initialState, action) => {
  let oldCart = [...state.cart];
  let oldWishlist = [...state.wishlist];

  switch (action.type) {
    case "ADD_TO_CART":
      // let isExist = oldCart.some(
      //   (item) => item.product.id === action.payload.product.id
      // );
      // let newCart = [];
      // if (isExist) {
      //   let updateCart = oldCart.map((item) => {
      //     if (item.product.id === action.payload.product.id) {
      //       item.quantity += 1;
      //     }
      //     return item;
      //   });
      //   newCart = [...updateCart];
      // } else {
      //   newCart = [...oldCart];
      //   newCart.push(action.payload);
      // }
      // return {
      //   ...state,
      //   cart: [...newCart],
      // };
      let newPro = Object.assign({}, action.product, action.qty);
      let newCart = [...oldCart];

      newCart.push(newPro);

      return {
        ...state,
        cart: [...newCart],
      };
    case "REMOVE_FROM_CART":
      let filterCart = oldCart.filter((item) => item.id !== action.productId);
      return {
        ...state,
        cart: [...filterCart],
      };
    case "INCREASE_QTY":
      let inQty = oldCart.map((item) => {
        if (item.id === action.productId) {
          item.quantity += 1;
        }
        return item;
      });

      return { ...state, cart: [...inQty] };

    case "DECREASE_QTY":
      let deQty = oldCart.map((item) => {
        if (item.id === action.productId) {
          item.quantity > 1 ? (item.quantity -= 1) : (item.quantity -= 0);
        }
        return item;
      });
      return { ...state, cart: [...deQty] };
    case "ADD_TO_WISHLIST":
      let newWishlist = [...oldWishlist];
      newWishlist.push(action.product);

      return {
        ...state,
        wishlist: [...newWishlist],
      };
    case "REMOVE_FROM_WISHLIST":
      let filterWishlist = oldWishlist.filter(
        (item) => item.id !== action.productId
      );
      return {
        ...state,
        wishlist: [...filterWishlist],
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

export default cartReducer;
