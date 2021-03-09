import { configureStore } from "@reduxjs/toolkit";
import offresReducer from "../actions/offres.actions";
import sitesReducer from "../actions/sites.actions";
import userReducer from "../actions/users.actions";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    offres: offresReducer,
    sites: sitesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
