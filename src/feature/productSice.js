import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";
import axios from "axios";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productStatus: STATUS.IDLE,
    productSingle: [],
    productSingleStatus: STATUS.IDLE,
  },
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fectAllProduct.pending, (state) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(fectAllProduct.fulfilled, (state, action) => {
        state.productStatus = STATUS.SUCCEEDED;
        state.products = action.payload;
      })
      .addCase(fectAllProduct.rejected, (state) => {
        state.productStatus = STATUS.FAILED;
      })
      .addCase(fetchproductSingle.pending, (state) => {
        state.productSingleStatus = STATUS.LOADING;
      })
      .addCase(fetchproductSingle.fulfilled, (state, action) => {
        state.productSingleStatus = STATUS.SUCCEEDED;
        state.productSingle = action.payload;
      })
      .addCase(fetchproductSingle.rejected, (state) => {
        state.productSingleStatus = STATUS.FAILED;
      });
  },
});

export const fectAllProduct = createAsyncThunk(
  "product/fectAllProduct",
  async (limit) => {
    const res = await axios.get(`${BASE_URL}products?limit=${limit}`);
    const data = await res.data.products;
    return data;
  }
);

export const fetchproductSingle = createAsyncThunk(
  "product/productSingle",
  async (id) => {
    const res = await axios.get(`${BASE_URL}products/${id}`);
    const data = await res.data;
    return data;
  }
);

export const getAllProducts = (state) => state.product.products;
export const getAllProductStatus = (state) => state.product.productStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getProductSingleStatus = (state) =>
  state.product.productSingleStatus;
export default productSlice.reducer;
