import { Typography } from "@material-ui/core";
import Offre from "Pages/Offres/Offre/Offre";
import Offres from "Pages/Offres/Offres";
import OffresRouter from "Pages/Offres/Offres.Router";
import React from "react";
import { Route, Switch } from "react-router";

export default function ConnectedRouter() {
  return (
    <Switch>
      <Route path="/offres" component={OffresRouter} />
    </Switch>
  );
}
