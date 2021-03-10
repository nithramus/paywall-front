import { List, ListItem, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import { getOffres } from "actions/offres.actions";
import NewOffreModal from "Components/NewModal";
import NewOffreForm from "Components/NewOffreForm";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Offres() {
  const offres = useSelector(getOffres);
  const offreListe = offres.map((offre) => {
    return (
      <Link to={`/offres/${offre.ID}`}>
        <ListItem button key="Offre1">
          <InboxIcon />
          <ListItemText primary={offre.Name} />
        </ListItem>
      </Link>
    );
  });
  return (
    <div>
      <NewOffreModal buttonText="Ajouter une offre">
        <NewOffreForm siteID={null} />
      </NewOffreModal>
      <List>{offreListe}</List>
    </div>
  );
}
