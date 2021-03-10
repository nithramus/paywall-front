import OffreMenu from "Global/OffresMenu";
import React from "react";
import { RouteComponentProps } from "react-router";
import SiteAbonnements from "./Abonnements";
import SiteSettings from "./Settings";
import SiteUsers from "./Users";

export default function Site({
  match,
}: RouteComponentProps<{ siteId: string }>) {
  let siteId = match.params.siteId;
  return (
    <OffreMenu
      componentId={siteId}
      componentOne={<SiteSettings siteId={siteId} />}
      componentOneText="Settings"
      componentTwo={<SiteAbonnements />}
      componentTwoText="Abonnements"
      componentThree={<SiteUsers />}
      componentThreeText="Users"
    />
  );
}
