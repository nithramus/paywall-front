import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "app/store";
import RequestUtils from "Libs/Request.utils";
import history from "./history";

interface RulesState {
  rules: Rules;
  selectedRule: Rule;
}

const initialState: RulesState = {
  rules: [],
  selectedRule: {} as Rule,
};

export const rulesSlice = createSlice({
  name: "rules",
  initialState,
  reducers: {
    setRules: (state: RulesState, action: PayloadAction<Rules>) => {
      state.rules = action.payload;
    },
    selectRule: (state: RulesState, action: PayloadAction<Rule>) => {
      state.selectedRule = action.payload;
    },
  },
});

export const { setRules, selectRule } = rulesSlice.actions;

export const loadRules = (siteID: number) => async (dispatch: AppDispatch) => {
  const rules = await RequestUtils.get(`/rules/site/${siteID}`);
  dispatch(setRules(rules));
};

export const addRule = (rule: Rule, siteID: number) => async (
  dispatch: AppDispatch
) => {
  const response = await RequestUtils.post(`/rules/site/${siteID}`, rule);
  dispatch(loadRules(siteID));
  history.push(`/rules/${response.ID}`);
};

export const updateRule = (
  params: Rule,
  siteID: number,
  ruleID: number
) => async (dispatch: AppDispatch) => {
  const response = await RequestUtils.put(
    `/rules/${ruleID}/site/${siteID}`,
    params
  );
  dispatch(loadRules(siteID));
};

export const loadRule = (siteID: number, ruleID: number) => async (
  dispatch: AppDispatch
) => {
  const site = await RequestUtils.get(`/rules/${ruleID}/site/${siteID}`);
  dispatch(selectRule(site));
};

export const addOffreToRule = async (
  siteID: number,
  offreID: number,
  ruleID: number
) => {
  await RequestUtils.post(`/rules/${ruleID}/site/${siteID}/offre/${offreID}`);
};

export const removeOffreFromRule = async (
  siteID: number,
  offreID: number,
  ruleID: number
) => {
  await RequestUtils.delete(`/rules/${ruleID}/site/${siteID}/offre/${offreID}`);
};

export const getRules = (state: RootState) => state.rules.rules;

export default rulesSlice.reducer;
