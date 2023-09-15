"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    english: (state) => {
      state.value = "en";
    },
    persion: (state) => {
      state.value = "fa";
    },
  },
});

export const { english, persion } = languageSlice.actions;

export default languageSlice.reducer;
