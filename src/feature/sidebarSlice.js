import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarOn: false,
  },
  reducers: {
    setSidebarOn: (state) => {
      state.isSidebarOn = true;
    },
    setSidebarOff: (state) => {
      state.isSidebarOn = false;
    },
  },
});

export const { setSidebarOn, setSidebarOff } = sideBarSlice.actions;
export const getSidebarStatus = (state) => state.sidebar.isSidebarOn;
export default sideBarSlice.reducer;
