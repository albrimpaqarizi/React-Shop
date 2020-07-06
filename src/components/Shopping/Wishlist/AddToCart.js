// import React from "react";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { IconButton } from "@material-ui/core";
// import { addToCart } from "../../../Store/Actions/cart";
// import { useSelector } from "react-redux";
// import { useExists } from "../../../Hooks/useExists";
// import { useActions } from "../../../Hooks/useActions";

// const AddToCart = (props) => {
//   const cartList = useSelector((state) => state.cart.cart);
//   const { id, inStock } = props;
//   const [inCart] = useExists(cartList, id);
//   const addItemToCart = useActions(addToCart, props.item);
//   const addItem = (e) => {
//     e.preventDefault();
//     props.addItemToCart();
//   };

//   console.log("add to cart");

//   return (
//     <IconButton onClick={addItem} disabled={inStock === 0 || inCart}>
//       <ShoppingBasketIcon />
//     </IconButton>
//   );
// };

// export default AddToCart;
