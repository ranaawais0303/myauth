import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: [],
  },
  reducers: {
    addAuth(state, action) {
      state.token.push(action.payload);
      console.log("added", action.payload);
    },
    removeAuth(state, action) {
      state.token = [];
      // return state.filter((item, index) => index !== action.payload);
    },
  },
});

export const { addAuth, removeAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
