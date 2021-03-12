import { getSite, loadSite, selectSite } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";
import { RootState } from "app/store";
import OffreMenu from "Global/OffresMenu";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import SiteAbonnements from "./Abonnements";
import SiteSettings from "./Settings";
import SiteUsers from "./Users";

export default function Site({
  match,
}: RouteComponentProps<{ siteId: string }>) {
  const dispatch = useAppDispatch();
  const site = useSelector(getSite);
  let siteID = parseInt(match.params.siteId);
  useEffect(() => {
    dispatch(loadSite(siteID));
  }, []);

  return (
    <OffreMenu
      componentId={siteID}
      componentOne={<SiteSettings />}
      componentOneText="Settings"
      componentTwo={<SiteAbonnements site={site} />}
      componentTwoText="Abonnements"
      componentThree={<SiteUsers />}
      componentThreeText="Users"
    />
  );
}
