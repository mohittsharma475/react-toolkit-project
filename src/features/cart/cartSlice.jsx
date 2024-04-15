import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItems, addItems, deleteItems, updateItems } from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk("cart/fetchItem", async () => {
  const response = await getItems();
  return response.data;
});
export const addAsync = createAsyncThunk("cart/addItem", async (item) => {
  const { product_name, price, product_image, description, product_id } = item;
  const response = await addItems({
    product_name,
    price,
    product_image,
    description,
    quantity: 1,
    product_id,
  });
  return response.data;
});
export const deleteAsync = createAsyncThunk("cart/deleteItem", async (id) => {
  const response = await deleteItems(id);
  return response.data.id;
});
export const UpdateAsync = createAsyncThunk("cart/updateItem", async (id,change) => {
  const response = await updateItems(id,change);
  return response.data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      });
  },
});

export const { increment } = cartSlice.actions;
