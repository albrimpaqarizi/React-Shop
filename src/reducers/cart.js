const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  let oldCart = [...state.cart];

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

      let newCart = [...oldCart];
      newCart.push(action.payload);

      return {
        ...state,
        cart: [...newCart],
      };

    case "INCREASE_QTY":
      let inQty = oldCart.map((item) => {
        if (item.product.id === action.productId) {
          item.quantity += 1;
        }
        return item;
      });

      return { ...state, cart: [...inQty] };

    case "DECREASE_QTY":
      let deQty = oldCart.map((item) => {
        if (item.product.id === action.productId) {
          item.quantity > 1 ? (item.quantity -= 1) : (item.quantity -= 0);
        }
        return item;
      });

      return { ...state, cart: [...deQty] };

    case "REMOVE_FROM_CART":
      let filterCart = oldCart.filter(
        (item) => item.product.id !== action.productId
      );
      return {
        ...state,
        cart: [...filterCart],
      };
    default:
      return state;
  }
};

export default cartReducer;
