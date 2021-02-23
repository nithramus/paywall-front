import { type } from "os";
import React from "react";
import "./Login.css";
import * as yup from "yup";
import { Formik } from "formik";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Paper, Theme } from "@material-ui/core";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "200px",
    },
  })
);
export default function Login() {
  const classes = useStyles();
  return <Paper className={classes.root}>test</Paper>;
}
