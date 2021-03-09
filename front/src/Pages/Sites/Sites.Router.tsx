import { loadSites } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";
import React from "react";
import { Route, Switch } from "react-router";
import Sites from "./Sites";

export default function SitesRouter(props: any) {
  const dispatch = useAppDispatch();
  dispatch(loadSites());
  return (
    <>
      <Switch>
        <Route exact path="/sites">
          <Sites />
        </Route>
        <Route path="/sites/:sitesId" component={Sites}></Route>
      </Switch>
    </>
  );
}
