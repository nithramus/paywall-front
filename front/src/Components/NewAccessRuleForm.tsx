import React, { FunctionComponent } from "react"; // importing FunctionComponent

import { Box, Button, TextField, Typography } from "@material-ui/core";
import { addRule } from "actions/rules.actions";
import { useAppDispatch } from "app/hooks";
import { useFormik } from "formik";
import * as yup from "yup";
import { PinDropSharp } from "@material-ui/icons";

let schema = yup.object({
  Name: yup.string().required(),
});

export default function NewAccessRuleForm(props: {
  siteID: number;
  handleClose: Function;
}) {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      Name: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addRule(values as Rule, props.siteID));
      props.handleClose();
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
