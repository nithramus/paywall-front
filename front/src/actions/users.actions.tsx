import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";
import RequestUtils from "Libs/Request.utils";
import history from "./history";
interface UserState {
  userType: string;
}
const initialState: UserState = {
  userType: localStorage.getItem("loggedAs") || "visitor",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAs: (state: UserState, action: PayloadAction<string>) => {
      state.userType = action.payload;
    },
  },
});
export const { loginAs } = userSlice.actions;

export const login = (email: string, password: string) => async (
  dispatch: AppDispatch
) => {
  const user = await RequestUtils.post("/login", { email, password });
  dispatch(loginAs("user"));
  localStorage.setItem("loggedAs", "user");
  history.push("/dashboard");
};

export const signup = (email: string, password: string) => async (
  dispatch: AppDispatch
) => {
  const user = await RequestUtils.post("/signup", { email, password });
  dispatch(login(email, password));
};

export const logout = () => (dispatch: AppDispatch) => {
  console.log("in");
  dispatch(loginAs("visitor"));
  localStorage.setItem("loggedAs", "visitor");
  history.push("/");
};

export const selectUserType = (state: RootState) => state.user.userType;

export default userSlice.reducer;
