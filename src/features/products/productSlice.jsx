import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPICall from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const {data} = await productAPICall();
   
    return data;
   
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { increment } = productSlice.actions;
