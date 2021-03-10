import { Box, Button, TextField, Typography } from "@material-ui/core";
import { addOffre } from "actions/offres.actions";
import { useAppDispatch } from "app/hooks";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

let schema = yup.object({
  Name: yup.string().required(),
});

export default function NewOffreForm() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addOffre(values.name));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box textAlign="center">
        <Typography variant="h5">Ajouter un offre</Typography>
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
      IS THIS FOR TEST ?
      <Button variant="contained" color="primary" fullWidth type="submit">
        Ajouter
      </Button>
    </form>
  );
}
