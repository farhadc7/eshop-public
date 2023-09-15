"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
export const getProducts = createAsyncThunk(
  "cart/getProducts",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/product`);

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  allProduct: [],
  cartItems: [],
  favouriteItems: [],
  loading: false,
  isSuccess: false,
  message: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartData: (state, action) => {
      state.cartItems = action.payload;
    },
    favouriteData: (state, action) => {
      state.favouriteItems = action.payload;
    },
    getAllProducts: async (state, action) => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/product`
      );

      state.allProduct = data;
    },
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        state.cartItems = state.cartItems.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        );
      } else {
        state.cartItems.push(action.payload);
      }
      localStorage.setItem(
        "cart",
        JSON.stringify({ cartItems: state.cartItems })
      );
    },
    removeOfCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (arrow) => arrow.id !== action.payload.id
      );
      localStorage.setItem(
        "cart",
        JSON.stringify({ cartItems: state.cartItems })
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);
      state.cartItems[itemIndex].quantity = quantity;
      localStorage.setItem(
        "cart",
        JSON.stringify({ cartItems: state.cartItems })
      );
    },
    deleteAllCart: (state, action) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
    },
    addToFavourite: (state, action) => {
      const item = state.favouriteItems.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        state.cartItems = state.favouriteItems.map((product) =>
          product.id === action.payload.id ? product : product
        );
      } else {
        action.payload["favourite"] = true;
        state.favouriteItems.push(action.payload);
      }
      localStorage.setItem(
        "favourite",
        JSON.stringify({ favouriteItems: state.favouriteItems })
      );
    },
    removeOfFavourite: (state, action) => {
      state.favouriteItems = state.favouriteItems.filter(
        (arrow) => arrow.id !== action.payload.id
      );
      localStorage.removeItem("favourite");
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allProduct = payload;
      state.isSuccess = true;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export const {
  addToCart,
  cartData,
  favouriteData,
  deleteAllCart,
  removeOfCart,
  addToFavourite,
  updateQuantity,
  removeOfFavourite,
} = cartSlice.actions;

export default cartSlice.reducer;
