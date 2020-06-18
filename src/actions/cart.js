export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product,
      quantity: 1,
    },
  };
};

export const inCreaseQty = (productId) => {
  return {
    type: "INCREASE_QTY",
    productId,
  };
};
export const deCreaseQty = (productId) => {
  return {
    type: "DECREASE_QTY",
    productId,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    productId,
  };
};
