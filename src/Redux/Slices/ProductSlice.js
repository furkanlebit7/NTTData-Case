import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../Services/ProductService";

export const EventSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    //Fetch All Events
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export default EventSlice.reducer;

//Selectors
export const getAllProducts = (state) => state.product;
