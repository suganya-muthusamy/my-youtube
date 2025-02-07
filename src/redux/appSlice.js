import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isReply: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    toggleReply: (state) => {
      state.isReply = !state.isReply;
    },
  },
});

export const { toggleMenu, closeMenu, toggleReply } = appSlice.actions;

export default appSlice.reducer;
