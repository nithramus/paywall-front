import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";
import RequestUtils from "Libs/Request.utils";
import history from "./history";

interface Site {
  _id: String;
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
  const response = await RequestUtils.post("/sites", { name, websiteUrl });
  dispatch(loadSites());
  history.push(`/site/${response.InsertedID}`);
};

export const getSite = (state: RootState, siteId: string) =>
  state.sites.sites.find((site) => site._id === siteId);
export const getSites = (state: RootState) => state.sites.sites;

export default sitesSlice.reducer;
