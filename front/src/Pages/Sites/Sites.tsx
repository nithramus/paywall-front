import React from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Inbox";
import NewSiteModal from "Components/NewSiteModal";
import { useSelector } from "react-redux";
import { getSites } from "actions/sites.actions";

export default function Sites() {
  const sites = useSelector(getSites);
  const siteListe = sites.map((site) => {
    return (
      <Link to={`/sites/${site._id}`}>
        <ListItem button key="Site1">
          <InboxIcon />
          <ListItemText primary={site.name} />
        </ListItem>
      </Link>
    );
  });
  return (
    <div>
      <NewSiteModal />
      <List>{siteListe}</List>
    </div>
  );
}
