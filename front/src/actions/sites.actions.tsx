import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";
import RequestUtils from "Libs/Request.utils";
import history from "./history";
interface SitesState {
  sites: Sites;
  selectedSite: Site;
}

const initialState: SitesState = {
  sites: [],
  selectedSite: {} as Site,
};

export const sitesSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {
    setSites: (state: SitesState, action: PayloadAction<Sites>) => {
      console.log("onon");
      state.sites = action.payload;
    },
    selectSite: (state: SitesState, action: PayloadAction<Site>) => {
      state.selectedSite = action.payload;
    },
  },
});

export const { setSites, selectSite } = sitesSlice.actions;

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

export const updateSite = (params: Site, siteId: number) => async (
  dispatch: AppDispatch
) => {
  const response = await RequestUtils.put(`/sites/${siteId}`, params);
  dispatch(loadSites());
};

export const loadSite = (siteID: number) => async (dispatch: AppDispatch) => {
  const site = await RequestUtils.get(`/sites/${siteID}`);
  dispatch(selectSite(site));
};

export const addOffreToSite = async (siteID: number, offreID: number) => {
  await RequestUtils.post(`/sites/${siteID}/offre/${offreID}`);
};

export const removeOffreFromSite = async (siteID: number, offreID: number) => {
  await RequestUtils.delete(`/sites/${siteID}/offre/${offreID}`);
};

export const getSite = (state: RootState) => {
  return state.sites.selectedSite;
};

export const getSites = (state: RootState) => state.sites.sites;

export default sitesSlice.reducer;
