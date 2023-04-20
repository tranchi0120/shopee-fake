import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";
import axios from "axios";

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    categoriesStatus: STATUS.IDLE,
    categoriesProduct: [],
    categoriesProductStatus: STATUS.IDLE,
  },
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesStatus = STATUS.SUCCEEDED;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(fetProductCategory.pending, (state) => {
        state.categoriesProductStatus = STATUS.LOADING;
      })
      .addCase(fetProductCategory.fulfilled, (state, action) => {
        state.categoriesProduct = action.payload;
        state.categoriesProductStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetProductCategory.rejected, (state) => {
        state.categoriesProductStatus = STATUS.FAILED;
      });
  },
});

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const res = await axios.get(`${BASE_URL}products/categories`);
      const data = await res.data;
      return data;
    } catch (error) {
      throw new Error("error request", error);
    }
  }
);

export const fetProductCategory = createAsyncThunk(
  "categories/fetProductCategory",
  async (category) => {
    try {
      const res = await axios.get(`${BASE_URL}products/category/${category}`);
      const data = res.data;
      return data;
    } catch (error) {
      throw new Error("error request", error);
    }
  }
);

export const getAllCategories = (state) => state.category.categories;
export const getProductCategories = (state) => state.category.categoriesProduct;
export const getProductCategoriesStatus = (state) => state.category.categoriesProductStatus;
export default categoriesSlice.reducer;
