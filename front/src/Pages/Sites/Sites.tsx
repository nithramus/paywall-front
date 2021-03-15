import { List, ListItem, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import { getSites, setSites } from "actions/sites.actions";
import NewModal from "Components/NewModal";
import NewSiteForm from "Components/NewSiteForm";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "app/store";

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
      <NewModal
        component={NewSiteForm}
        siteID={0}
        buttonText="Ajouter un site"
      />

      <List>{siteList}</List>
    </div>
  );
}
