import React from "react";

import Header from "Global/Header";
import Login from "Pages/Login/Login";
import { Container, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Signup from "Pages/SignUp/SignUp";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container>
          <Signup />
          <Login />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
