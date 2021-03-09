import OffresRouter from "Pages/Offres/Offres.Router";
import SitesRouter from "Pages/Sites/Sites.Router";
import React from "react";
import { Route, Switch } from "react-router";

export default function ConnectedRouter() {
  return (
    <Switch>
      <Route path="/offres" component={OffresRouter} />
      <Route path="/sites" component={SitesRouter} />
    </Switch>
  );
}
