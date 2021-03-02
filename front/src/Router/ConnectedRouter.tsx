import { Typography } from "@material-ui/core";
import Site from "Pages/Sites/Site/Site";
import Sites from "Pages/Sites/Sites";
import React from "react";
import { Router, Route, Switch } from "react-router";

export default function ConnectedRouter() {
  return (
    <Switch>
      <Route path="dashboard"></Route>
      <Route path="/sites">
        <Sites />
      </Route>
      <Route path="/site/:siteId">
        <Site />
      </Route>
      <Route path="/"></Route>
    </Switch>
  );
}
