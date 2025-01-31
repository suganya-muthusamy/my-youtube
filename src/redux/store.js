import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoReducer from "./videoSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
  },
});
export default store;
