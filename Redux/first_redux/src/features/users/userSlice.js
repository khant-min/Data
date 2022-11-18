import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = [
  { id: "0", name: "Khant" },
  { id: "1", name: "Min" },
  { id: "2", name: "Thu" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = state => state.users;

export default userSlice.reducer;
