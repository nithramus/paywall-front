import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React, { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperContainer: {
      padding: theme.spacing(3),
      maxWidth: 800,
    },
    formControl: {
      minWidth: 120,
    },
    details: {
      alignItems: "center",
      width: "100%",
    },
  })
);

export default function Sites() {
  const classes = useStyles();

  return (
    <>
      <Accordion elevation={2} style={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography>Nom du site</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ width: "100%" }}>
          <List className={classes.details}>
            <ListItem>
              <ListItemText
                className={classes.details}
                primary="Fréquence de orélèvement de vos utilisateurs"
              />
              <FormControl className={classes.formControl}>
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
            <ListItem className={classes.details}>
              <ListItemText
                className={classes.details}
                primary="Sélectionné le schema d'accès déverouillé"
              />
              <FormControl className={classes.formControl}>
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </AccordionDetails>
        <Divider />
        <AccordionActions style={{ justifyContent: "space-between" }}>
          <Link to="/site">
            <Button variant="contained" color="primary">
              Accéder au site
            </Button>
          </Link>
          <div>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </div>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
