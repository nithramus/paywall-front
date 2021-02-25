import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import RequestUtils from "Libs/Request.utils";
import { login } from "actions/users.actions";
import { useAppDispatch } from "../../app/hooks";
let schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export default function Login() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values.email, values.password));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box textAlign="center">
        <Typography variant="h5">Connectez vous !</Typography>
      </Box>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        margin="normal"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Box mt={4}>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Se connecter
        </Button>
      </Box>
      <Button color="secondary" fullWidth>
        Mot de passe oublié ?
      </Button>
    </form>
  );
}
