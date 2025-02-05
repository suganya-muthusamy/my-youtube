import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { result: {} },
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state.result, action.payload);
      console.log("state", state.result);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
