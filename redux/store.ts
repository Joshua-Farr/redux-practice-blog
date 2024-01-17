import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogPostSlice";

export default configureStore({
  reducer: {
    blog: blogReducer,
  },
});
