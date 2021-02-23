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
import { loginAs } from "actions/users.actions";
import { useAppDispatch } from "../../app/hooks";
let schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});
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
export default function Login() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const user = await RequestUtils.post("/login", values);
      dispatch(loginAs("user"));
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
      >
        <Box mb={3}>
          <Typography variant="h4">New Google</Typography>
        </Box>
        <Paper className={classes.root}>
          <Box className={classes.box}>
            <Box
              fontSize="h5.fontSize"
              fontWeight="fontWeightBold"
              textAlign="center"
            >
              <Typography>Connection à votre compte</Typography>
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Se connecter
              </Button>
            </Box>
          </Box>
          <Button color="secondary">Mot de passe oublié ?</Button>
        </Paper>
      </Grid>
    </form>
  );
}
