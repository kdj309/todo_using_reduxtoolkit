  import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./reducers";

export default configureStore({
  reducer: {
    student: StudentReducer,
  },
});
