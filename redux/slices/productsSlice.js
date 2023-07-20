import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/products.json";

const products = JSON.parse(JSON.stringify(data));

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    cart: [],
    wishList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    addToWishList: (state, action) => {
      state.wishList = [...state.wishList, action.payload];
    },
  },
});

export default productsSlice.reducer;

export const { addToCart, addToWishList } = productsSlice.actions;
