import React from "react";
import Site from "./Site/Site";
import { Route, Switch } from "react-router";
import Sites from "./Sites";
import { loadSites } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";

export default function SitesRouter(props: any) {
  const dispatch = useAppDispatch();
  dispatch(loadSites());
  return (
    <Switch>
      <Route exact path="/sites">
        <Sites />
      </Route>
      <Route path="/sites/:siteId" component={Site}></Route>
    </Switch>
  );
}
