import React from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Inbox";
import NewOffreModal from "Components/NewOffreModal";
import { useSelector } from "react-redux";
import { getOffres } from "actions/offres.actions";

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
      <NewOffreModal />
      <List>{offreListe}</List>
    </div>
  );
}
