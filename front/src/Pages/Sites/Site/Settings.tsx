import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { getSite, updateSite } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";
import { RootState } from "app/store";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";

let schema = yup.object({
  // Activated: yup.bool(),
  Name: yup.string().required().min(4),
  // WebSiteURL: yup.string().url().required(),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
  })
);

export default function OffreSettings(props: { site: Site }) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: { ...props.site },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log({ values });
      dispatch(updateSite(values, props.site.ID));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <List component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary="Activer la visibilité de ce site." />
          <FormControlLabel
            control={
              <Switch
                size="medium"
                checked={formik.values.Activated}
                color="primary"
                // name="Activated"
                onChange={(value, checked) => {
                  console.log(formik.values.Activated);
                  console.log(value, checked);
                  formik.setFieldValue("Activated", checked);
                }}
              />
            }
            label="Activated"
          />
        </ListItem>
        <Divider />
        <ListItem divider>
          <ListItemText primary="Fréquence de orélèvement de vos utilisateurs" />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">recurrency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Journalier</MenuItem>
              <MenuItem value={20}>Semainier</MenuItem>
              <MenuItem value={30}>Monthly</MenuItem>
              <MenuItem value={30}>Annualy</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <ListItemText primary="Description, décrivez quel type d'accès sera débloqué" />
        </ListItem>
        <Divider light />
        <ListItem>
          <ListItemText primary="Titre de votre site (ex: Premium, Gold)" />
          <TextField
            fullWidth
            id="Name"
            name="Name"
            margin="normal"
            label="Name"
            type="text"
            value={formik.values.Name}
            onChange={formik.handleChange}
            error={formik.touched.Name && Boolean(formik.errors.Name)}
            helperText={formik.touched.Name && formik.errors.Name}
          />
        </ListItem>
        <Divider light />
        <ListItem>
          <ListItemText primary="Ajouter une icône" />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" fullWidth type="submit">
        Valider
      </Button>
    </form>
  );
}
