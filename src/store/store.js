import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./../feature/sidebarSlice";
import categoriesSlice from "../feature/categoriesSlice";
import productSlice from "./../feature/productSice";
import cartSlice from "../feature/cartSlice";

const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    category: categoriesSlice,
    product: productSlice,
    cart: cartSlice,
  },
});

export default store;
