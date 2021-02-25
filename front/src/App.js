import React from "react";

import Header from "Global/Header";
import Login from "Pages/Login/Login";
import { Container, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Signup from "Pages/SignUp/SignUp";
import NotConnectedRouter from "Router/NotConnected.Router";
import { useSelector } from "react-redux";
import { selectUserType } from "actions/users.actions";
import ConnectedRouter from "Router/ConnectedRouter";
import Menu from "./Global/Menu";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  const userType = useSelector(selectUserType);
  if (userType === "visitor") {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Container>
            <NotConnectedRouter />
          </Container>
        </div>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Menu />
        <Container>
          <ConnectedRouter />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
