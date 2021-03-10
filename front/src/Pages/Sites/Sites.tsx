import { List, ListItem, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import { getSites } from "actions/sites.actions";
import NewModal from "Components/NewModal";
import NewSiteForm from "Components/NewSiteForm";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Sites() {
  const sites = useSelector(getSites);
  const siteList = sites.map((site) => {
    return (
      <Link to={`/sites/${site.ID}`}>
        <ListItem button key="Offre1">
          <InboxIcon />
          <ListItemText primary={site.Name} />
        </ListItem>
      </Link>
    );
  });
  return (
    <div>
      <NewModal buttonText="Ajouter un site">
        <NewSiteForm />
      </NewModal>
      <List>{siteList}</List>
    </div>
  );
}
