import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import dashboardReducer from "./dashboard/slice";

export default configureStore({
  reducer: {
    authReducer,
    dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
