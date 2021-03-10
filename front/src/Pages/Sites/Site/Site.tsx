import { getSite } from "actions/sites.actions";
import { RootState } from "app/store";
import OffreMenu from "Global/OffresMenu";
import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import SiteAbonnements from "./Abonnements";
import SiteSettings from "./Settings";
import SiteUsers from "./Users";

export default function Site({
  match,
}: RouteComponentProps<{ siteId: string }>) {
  let siteId = match.params.siteId;
  const site = useSelector((state: RootState) => getSite(state, siteId));

  return (
    <OffreMenu
      componentId={siteId}
      componentOne={<SiteSettings site={site} />}
      componentOneText="Settings"
      componentTwo={<SiteAbonnements site={site} />}
      componentTwoText="Abonnements"
      componentThree={<SiteUsers />}
      componentThreeText="Users"
    />
  );
}
