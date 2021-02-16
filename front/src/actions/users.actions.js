import { createSlice } from "@reduxjs/toolkit";
import RequestUtils from "Libs/Request.utils";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userType: "visitor",
  },
  reducers: {
    loginAs: (state, action) => {
      state.userType = action.payload;
    },
  },
});
export const { loginAs } = userSlice.actions;
export const login = (email, password) => async (dispatch) => {
  const user = await RequestUtils.post("/login", { email, password });
  dispatch(loginAs(user));
};

export const signup = (email, password) => async (dispatch) => {
  const user = await RequestUtils.post("/signup", { email, password });
  login(email, password);
};
export default userSlice.reducer;
