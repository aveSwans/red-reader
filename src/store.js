import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./components/posts/PostsSlice.js";

export default configureStore({
    reducer: {
        posts: postsSliceReducer
    }
});