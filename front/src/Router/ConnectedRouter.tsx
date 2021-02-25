import React from "react";
import { Router, Route, Switch } from "react-router";

export default function ConnectedRouter() {
  return (
    <Switch>
      <Route path="dashboard"></Route>
      <Route path="/"></Route>
    </Switch>
  );
}
