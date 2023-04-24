import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./../feature/sidebarSlice";
import categoriesSlice from "../feature/categoriesSlice";
import productSlice from "./../feature/productSice";
import cartSlice from "../feature/cartSlice";
import searchSlice from "../feature/searchSlice";

const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    category: categoriesSlice,
    product: productSlice,
    cart: cartSlice,
    search: searchSlice
  },
});

export default store;
