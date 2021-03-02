import { Box, Typography, TextField, Button } from "@material-ui/core";
import { addSite } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

let schema = yup.object({
  name: yup.string().required(),
  websiteUrl: yup.string().url().required(),
});

export default function NewSiteForm() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      websiteUrl: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addSite(values.name, values.websiteUrl));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box textAlign="center">
        <Typography variant="h5">Ajouter un site</Typography>
      </Box>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="name"
        margin="normal"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        id="websiteUrl"
        name="websiteUrl"
        label="websiteUrl"
        margin="normal"
        value={formik.values.websiteUrl}
        onChange={formik.handleChange}
        error={formik.touched.websiteUrl && Boolean(formik.errors.websiteUrl)}
        helperText={formik.touched.websiteUrl && formik.errors.websiteUrl}
      />
      <Button variant="contained" color="primary" fullWidth type="submit">
        Ajouter
      </Button>
    </form>
  );
}
