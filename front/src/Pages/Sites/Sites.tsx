import React from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Inbox";
import NewSiteModal from "Components/NewSiteModal";

export default function Sites() {
  return (
    <div>
      <NewSiteModal />
      <List>
        <ListItem button key="Site1">
          <InboxIcon />
          <ListItemText primary={"Sites"} />
        </ListItem>
      </List>
    </div>
  );
}
