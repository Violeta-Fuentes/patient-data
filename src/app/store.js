import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

export default configureStore({
  reducer: {
    users: userReducer,
  },
});
