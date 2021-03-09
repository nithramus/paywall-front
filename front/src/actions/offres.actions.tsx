import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";
import RequestUtils from "Libs/Request.utils";
import history from "./history";

interface OffresState {
  offres: Offres;
}

const initialState: OffresState = {
  offres: [],
};

export const offresSlice = createSlice({
  name: "offres",
  initialState,
  reducers: {
    setOffres: (state: OffresState, action: PayloadAction<Offres>) => {
      state.offres = action.payload;
    },
  },
});

export const { setOffres } = offresSlice.actions;

export const loadOffres = () => async (dispatch: AppDispatch) => {
  const offres = await RequestUtils.get("/offres");
  dispatch(setOffres(offres));
};

export const addOffre = (name: string, weboffreUrl: string) => async (
  dispatch: AppDispatch
) => {
  const response = await RequestUtils.post("/offres", { name, weboffreUrl });
  dispatch(loadOffres());
  history.push(`/offres/${response.InsertedID}`);
};

export const getOffre = (state: RootState, offreId: string) =>
  state.offres.offres.find((offre) => offre.ID === offreId);
export const getOffres = (state: RootState) => state.offres.offres;

export default offresSlice.reducer;
