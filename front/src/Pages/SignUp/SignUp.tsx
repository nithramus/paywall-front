import React from "react";
import * as yup from "yup";
import RequestUtils from "Libs/Request.utils";
import { useFormik } from "formik";
import { useAppDispatch } from "app/hooks";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { signup } from "actions/users.actions";
let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  passwordValidation: yup.string().min(8).required(),
  // .oneOf([yup.ref("passwordValidation"), null]),
});

export default function Signup() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordValidation: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      dispatch(signup(values.email, values.password));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        fontSize="h4.fontSize"
        fontWeight="fontWeightBold"
        textAlign="center"
      >
        <Typography>S'inscrire</Typography>
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
      <TextField
        fullWidth
        id="passwordValidation"
        name="passwordValidation"
        margin="normal"
        label="passwordValidation"
        type="passwordValidation"
        value={formik.values.passwordValidation}
        onChange={formik.handleChange}
        error={
          formik.touched.passwordValidation &&
          Boolean(formik.errors.passwordValidation)
        }
        helperText={
          formik.touched.passwordValidation && formik.errors.passwordValidation
        }
      />
      <Box mt={4}>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Se connecter
        </Button>
      </Box>
      <Button color="secondary">Mot de passe oublié ?</Button>
    </form>
  );
}
