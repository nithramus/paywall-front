import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";
import RequestUtils from "Libs/Request.utils";
import Site from "Pages/Sites/Site/Site";
import history from "./history";
interface Site {
  ID: Number;
  Activated: boolean;
  Name: String;
  WebsiteUrl: String;
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

export const addSite = (Name: string) => async (dispatch: AppDispatch) => {
  const response = await RequestUtils.post("/sites", { Name });
  console.log(response);
  dispatch(loadSites());
  history.push(`/sites/${response.ID}`);
};

export const updateSite = (params: Site, siteId: string) => async (
  dispatch: AppDispatch
) => {
  const response = await RequestUtils.put(`/sites/${siteId}`, params);
  dispatch(loadSites());
};

export const getSite = (state: RootState, siteId: string) => {
  let site: Site;
  return (
    state.sites.sites.find((site) => site.ID === parseInt(siteId, 10)) ||
    ({} as Site)
  );
};
export const getSites = (state: RootState) => state.sites.sites;

export default sitesSlice.reducer;
