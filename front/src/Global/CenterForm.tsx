import {
  Grid,
  Box,
  Typography,
  Paper,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { PropsWithChildren } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "500px",
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(3),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    box: {
      width: "90%",
    },
  })
);

export default function CenterForm(props: PropsWithChildren<{}>) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "90vh" }}
    >
      <Box mb={4}>
        <Typography color="primary" variant="h3">
          New Google
        </Typography>
      </Box>
      <Paper elevation={3} className={classes.root}>
        <Box className={classes.box}>{props.children}</Box>
      </Paper>
    </Grid>
  );
}
