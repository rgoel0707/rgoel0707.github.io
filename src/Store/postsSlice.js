import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: {}
  },
  reducers: {
    addPost: (state, action) => {
      const { id, title, imgsrc, votes, url, type, num_comments } = action.payload;
      state.posts[id] = {
        id: id,
        title: title,
        imgsrc: imgsrc,
        votes: votes,
        url: url,
        type: type,
        num_comments: num_comments,
        comments: []
      }
    },
    removeAllPosts: (state,action) => {
      state = {
        posts: {}
      }
      return state;
    }
  },
});

export const postsSelector = (state) => state.posts.posts;
export const { addPost, removeAllPosts } = postsSlice.actions;
export default postsSlice.reducer;
