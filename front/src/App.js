import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Header from "Global/Header";
import Login from "Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login />
    </div>
  );
}

export default App;
