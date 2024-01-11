import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Adriano",
  },
  {
    id: "2",
    name: "Grego",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
});
export const selectAllUsers = (state) => state.posts;

export default usersSlice.reducer;
