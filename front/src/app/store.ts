import { configureStore } from "@reduxjs/toolkit";
import offresReducer from "../actions/offres.actions";
import sitesReducer from "../actions/sites.actions";
import userReducer from "../actions/users.actions";
import counterReducer from "../features/counter/counterSlice";
import rulesReducer from "../actions/rules.actions";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    offres: offresReducer,
    sites: sitesReducer,
    rules: rulesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
