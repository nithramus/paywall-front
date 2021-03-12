import { List } from "@material-ui/core";
import { getOffres } from "actions/offres.actions";
import { useSelector } from "react-redux";

import React from "react";
import ListOffre from "./ListOffre";

export default function SelectOffre(props: { siteID: number }) {
  const offres = useSelector(getOffres);

  const offreList = offres.map((offre) => {
    if (
      offre.Sites &&
      offre.Sites.find((site: Site) => site.ID === props.siteID)
    ) {
      return null;
    }
    return <ListOffre offre={offre} siteID={props.siteID} />;
  });
  return <List style={{ width: "100%" }}>{offreList}</List>;
}
