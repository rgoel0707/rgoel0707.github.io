import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: {}
  },
  reducers: {
    addComment: (state, action) => {
      const { id, text, votes, postId } = action.payload;
      state.comments[id] = {
        id: id,
        text: text,
        votes: votes,
        postId: postId
      }
    },
    removeAllComments: (state,action) => {
      state = {
        comments: {}
      }
      return state;
    }
  },
});

export const commentsSelector = (state) => state.comments.comments;
export const { addComment, removeAllComments } = commentsSlice.actions;
export default commentsSlice.reducer;
