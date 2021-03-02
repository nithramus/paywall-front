import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";
import { get } from "http";
import RequestUtils from "Libs/Request.utils";
import history from "./history";

interface Site {
  name: String;
}
type Sites = Array<Site>;
interface SitesState {
  sites: Sites;
}

const initialState: SitesState = {
  sites: [],
};

export const sitesSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {
    setSites: (state: SitesState, action: PayloadAction<Sites>) => {
      state.sites = action.payload;
    },
  },
});

export const { setSites } = sitesSlice.actions;

export const loadSites = () => async (dispatch: AppDispatch) => {
  const sites = await RequestUtils.get("/sites");
  dispatch(setSites(sites));
};

export const addSite = (name: string, websiteUrl: string) => async (
  dispatch: AppDispatch
) => {
  const site = await RequestUtils.post("/site", { name, websiteUrl });
  dispatch(loadSites());
  history.push(`/site/${site._id}`);
};
