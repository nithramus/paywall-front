import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Inbox";
import { useState } from "react";
import { useAppDispatch } from "app/hooks";
import {
  loadSite,
  loadSites,
  removeOffreFromSite,
  addOffreToSite,
} from "actions/sites.actions";
export default function ListOffre(props: { offre: Offre; siteID: number }) {
  const [added, setAdded] = useState(false);
  const dispatch = useAppDispatch();
  const addOffre = async (offreID: number) => {
    await addOffreToSite(props.siteID, offreID);
    dispatch(loadSite(props.siteID));
    setAdded(true);
  };
  const removeOffre = async (offreID: number) => {
    await removeOffreFromSite(props.siteID, offreID);
    dispatch(loadSite(props.siteID));

    setAdded(false);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.offre.Name} />
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          added ? removeOffre(props.offre.ID) : addOffre(props.offre.ID)
        }
      >
        {added ? "Supprimer" : "Ajouter"}
      </Button>
    </ListItem>
  );
}
