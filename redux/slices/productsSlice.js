import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/products.json";

const products = JSON.parse(JSON.stringify(data));

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    cart: [],
    wishList: [],
    filter: "",
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addToWishList: (state, action) => {
      state.wishList = [...state.wishList, action.payload];
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity -= 1;
      if (item.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const {
  addToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
  increaseQuantity,
  decreaseQuantity,
  setFilter,
} = productsSlice.actions;
