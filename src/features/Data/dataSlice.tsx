import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: {},
  isError: false,
};

export const getShops = createAsyncThunk("data/getShops", async () => {
  const response = await fetch("http://127.0.0.1:8000/places/places/");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShops.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(getShops.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default dataSlice.reducer;
