import { configureStore } from "@reduxjs/toolkit";
// import reducers
import categorySliceReducer from "./categorySlice";
import commentsSliceReducer from "./commentsSlice";
import postsSliceReducer from "./postsSlice";
import inputDataReducer from "./inputDataSlice";

export default configureStore({
  reducer: {
    posts: postsSliceReducer,
    comments: commentsSliceReducer,
    categories: categorySliceReducer,
    inputData: inputDataReducer
  },
});
