import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Header from "Global/Header";
import Login from "Pages/Login/Login";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Login />
      </Container>
    </div>
  );
}

export default App;
