import { Box, Button, TextField, Typography } from "@material-ui/core";
import { addRule } from "actions/rules.actions";
import { useAppDispatch } from "app/hooks";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

let schema = yup.object({
  Name: yup.string().required(),
});

export default function NewAccessRuleForm(props: { siteID: number }) {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      Name: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addRule(values as Rule, props.siteID));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box textAlign="center">
        <Typography variant="h5">Ajouter une règle</Typography>
      </Box>
      <TextField
        fullWidth
        id="Name"
        name="Name"
        label="Name"
        margin="normal"
        value={formik.values.Name}
        onChange={formik.handleChange}
        error={formik.touched.Name && Boolean(formik.errors.Name)}
        helperText={formik.touched.Name && formik.errors.Name}
      />
      <Button variant="contained" color="primary" fullWidth type="submit">
        Ajouter
      </Button>
    </form>
  );
}
