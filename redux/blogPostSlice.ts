import { createSlice } from "@reduxjs/toolkit";

interface BlogState {
  likes: number;
  comments: string[];
}

const initialBlogState: BlogState = {
  likes: 0,
  comments: [],
};

export const blogPostSlice = createSlice({
  name: "blog",
  initialState: initialBlogState,
  reducers: {
    addComment: (state, action) => {
      const copyComments: string[] = [...state.comments];
      copyComments.push(action.payload);

      return {
        ...state,
        comments: copyComments,
      };
    },

    likeBlogPost: (state) => {
      return {
        ...state,
        likes: state.likes + 1,
      };
    },
  },
});

export const { addComment, likeBlogPost } = blogPostSlice.actions;

export default blogPostSlice.reducer;
