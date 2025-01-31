import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  singleVideo: localStorage.getItem("singleVideo")
    ? JSON.parse(localStorage.getItem("singleVideo"))
    : null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideos(state, action) {
      state.videos = action.payload;
    },

    playVideo(state, action) {
      state.singleVideo = action.payload;
      localStorage.setItem("singleVideo", JSON.stringify(action.payload));
    },
  },
});

export const { setVideos, playVideo } = videoSlice.actions;

export default videoSlice.reducer;
