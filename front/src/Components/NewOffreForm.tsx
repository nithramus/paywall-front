import { Box, Button, TextField, Typography } from "@material-ui/core";
import { addOffre } from "actions/offres.actions";
import { useAppDispatch } from "app/hooks";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

let schema = yup.object({
  Name: yup.string().required(),
});

export default function NewOffreForm(props: {
  siteID: number | null;
  handleClose: Function;
}) {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      Name: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(addOffre(values.Name, props.siteID));
      props.handleClose();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box textAlign="center">
        <Typography variant="h5">Ajouter un offre</Typography>
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
      IS THIS FOR TEST ?
      <Button variant="contained" color="primary" fullWidth type="submit">
        Ajouter
      </Button>
    </form>
  );
}
