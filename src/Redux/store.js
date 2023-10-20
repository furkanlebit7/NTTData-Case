import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import FavoriteSlice from "./Slices/FavoriteSlice";

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    favorite: FavoriteSlice,
  },
});
