import { createSlice } from "@reduxjs/toolkit";
const liveChatSlice = createSlice({
  name: "live",
  initialState: {
    liveMessages: [],
  },
  reducers: {
    addLiveMessages: (state, action) => {
      state.liveMessages.splice(20, 1);
      state.liveMessages.unshift(action.payload); // Add new message at the beginning
    },
  },
});

export const { addLiveMessages } = liveChatSlice.actions;
export default liveChatSlice.reducer;
