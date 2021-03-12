import { loadSites } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";
import React from "react";
import { Route, Switch } from "react-router";
import Site from "./Site/Site";
import Sites from "./Sites";
export default function SitesRouter(props: any) {
  return (
    <>
      <Switch>
        <Route exact path="/sites">
          <Sites />
        </Route>
        <Route path="/sites/:siteId" component={Site}></Route>
      </Switch>
    </>
  );
}
