import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/products.json";

const products = JSON.parse(JSON.stringify(data));

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { setProducts } = productsSlice.actions;
