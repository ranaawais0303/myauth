import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
const MyStore = configureStore({
  name: "auth",
  reducer: {
    name: authReducer,
  },
});

export default MyStore;
