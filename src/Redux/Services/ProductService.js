import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/getProducts",
  async () => {
    const { data } = await axios.get(
      `https://honey-badgers-ecommerce.glitch.me/products`
    );
    return data;
  }
);
