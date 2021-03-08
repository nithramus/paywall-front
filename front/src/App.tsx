import { Container } from "@material-ui/core";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { selectUserType } from "actions/users.actions";
import Header from "Global/Header";
import React from "react";
import { useSelector } from "react-redux";
import ConnectedRouter from "Router/ConnectedRouter";
import NotConnectedRouter from "Router/NotConnected.Router";
import Menu from "./Global/Menu";

const theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#fafafa",
    },
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
