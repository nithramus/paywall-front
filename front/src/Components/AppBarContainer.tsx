import { Box } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { PropsWithChildren } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperContainer: {
      padding: theme.spacing(0),
      maxWidth: 800,
      minWidth: "80%",
    },
    formControl: {
      minWidth: 120,
    },
    center: {
      display: "flex",
      justifyContent: "center",
    },
  })
);
export default function AppBarContainer(props: PropsWithChildren<{}>) {
  const classes = useStyles();
  return (
    <Box className={classes.center}>
      <Paper elevation={3} className={classes.paperContainer}>
        {props.children}
      </Paper>
    </Box>
  );
}
