import React from "react";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Header from "Global/Header";
import Login from "Pages/Login/Login";
import { Container, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <Container>
          <Login />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
