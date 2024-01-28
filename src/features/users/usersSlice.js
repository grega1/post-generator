import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Sigmund Freud",
  },
  {
    id: "2",
    name: "Michael Foucault",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
});
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
