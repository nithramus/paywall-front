import {
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Switch,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
  })
);

export default function Abonnement() {
  const classes = useStyles();
  return (
    <FormGroup>
      <List component="nav" aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary="Activer la visibilité de cet abonnement. Celui-ci sera visible sur tous les sites référencé" />
          <FormControlLabel
            control={<Switch size="medium" checked={true} color="primary" />}
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
          <ListItemText primary="Titre de votre abonnement (ex: Premium, Gold)" />
        </ListItem>
        <Divider light />
        <ListItem>
          <ListItemText primary="Ajouter une icône" />
        </ListItem>
      </List>
    </FormGroup>
  );
}
