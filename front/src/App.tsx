import React from "react";

import Header from "Global/Header";
import Login from "Pages/Login/Login";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Signup from "Pages/SignUp/SignUp";
import NotConnectedRouter from "Router/NotConnected.Router";
import { useSelector } from "react-redux";
import { selectUserType } from "actions/users.actions";
import ConnectedRouter from "Router/ConnectedRouter";
import Menu from "./Global/Menu";
import { Container } from "@material-ui/core";
import { loadSites } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

function App() {
  const classes = useStyles();

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
      <div className={classes.root}>
        <Menu />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <ConnectedRouter />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
