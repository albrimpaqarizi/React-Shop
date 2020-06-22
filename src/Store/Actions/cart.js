export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    product,
    qty: { quantity: 1 },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    productId,
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

export const setProPerPage = (setNr) => {
  return {
    type: "SET_PRO_PER_PAGE",
    setNr,
  };
};

export const addToWishlist = (product) => {
  return {
    type: "ADD_TO_WISHLIST",
    product,
  };
};

export const removeFromWishlist = (productId) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    productId,
  };
};
