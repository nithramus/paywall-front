import React from "react";
import Offre from "./Offre/Offre";
import { Route, Switch } from "react-router";
import Offres from "./Offres";
import { loadOffres } from "actions/offres.actions";
import { useAppDispatch } from "app/hooks";
import OffreMenu from "Global/OffresMenu";

export default function OffresRouter(props: any) {
  const dispatch = useAppDispatch();
  dispatch(loadOffres());
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
