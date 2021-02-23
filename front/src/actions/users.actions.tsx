import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";
import RequestUtils from "Libs/Request.utils";

interface UserState {
  userType: string;
}
const initialState: UserState = {
  userType: "visitor",
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
  dispatch(loginAs(user));
};

export const signup = (email: string, password: string) => async (
  dispatch: AppDispatch
) => {
  const user = await RequestUtils.post("/signup", { email, password });
  login(email, password);
};
export default userSlice.reducer;
