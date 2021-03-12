import React from "react";
import Offre from "./Offre/Offre";
import { Route, Switch } from "react-router";
import Offres from "./Offres";

export default function OffresRouter(props: any) {
  return (
    <>
      <Switch>
        <Route exact path="/offres">
          <Offres />
        </Route>
        <Route path="/offres/:offreId" component={Offre}></Route>
      </Switch>
    </>
  );
}
