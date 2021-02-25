import CenterForm from "Global/CenterForm";
import Login from "Pages/Login/Login";
import Signup from "Pages/SignUp/SignUp";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function NotConnectedRouter() {
  return (
    <Switch>
      <Route path="/login">
        <CenterForm>
          <Login />
        </CenterForm>
      </Route>
      <Route path="/signup">
        <CenterForm>
          <Signup />
        </CenterForm>
      </Route>
    </Switch>
  );
}
