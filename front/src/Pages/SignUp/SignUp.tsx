import React from "react";
import { signup } from "actions/users.actions";
import { Grid } from "@material-ui/core";
import * as yup from "yup";
import RequestUtils from "Libs/Request.utils";
import { useFormik } from "formik";
import { useAppDispatch } from "app/hooks";

let schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const body = await RequestUtils.post("/signup", values);
    },
  });
  const dispatch = useAppDispatch();
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh" }}
      ></Grid>
    </form>
  );
}
