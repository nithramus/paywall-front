import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../actions/users.actions";
import sitesReducer from "../actions/sites.actions";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    sites: sitesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
