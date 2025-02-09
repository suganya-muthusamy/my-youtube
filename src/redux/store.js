import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoReducer from "./videoSlice";
import searchReducer from "./searchSlice";
import liveChatReducer from "./liveChatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
    search: searchReducer,
    liveChat: liveChatReducer,
  },
});
export default store;
