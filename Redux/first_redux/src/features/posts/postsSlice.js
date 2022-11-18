// import { createSlice, nanoid } from "@reduxjs/toolkit";
// // import postsList from "./postsList";

// const initialState = [
//   {
//     id: "1",
//     title: "Learning Redux Toolkit",
//     content: "I've heard good things about redux",
//   },
//   {
//     id: "2",
//     title: "Slices...",
//     content: "The more I say slice, the more I want pizza",
//   },
// ];

// const postSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     postAdded: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(title, content, userId) {
//         return {
//           payload: {
//             id: nanoid(),
//             title,
//             content,
//             userId,
//           },
//         };
//       },
//     },
//   },
// });

// export const selectAllPosts = state => state.posts;

// export const { postAdded } = postSlice.actions;

// export default postSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import postsList from "./postsList";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things about redux",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = state => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
