import { Typography } from "@material-ui/core";
import Site from "Pages/Sites/Site/Site";
import Sites from "Pages/Sites/Sites";
import SitesRouter from "Pages/Sites/Sites.Router";
import React from "react";
import { Route, Switch } from "react-router";

export default function ConnectedRouter() {
  return (
    <Switch>
      <Route path="/sites" component={SitesRouter} />
    </Switch>
  );
}
