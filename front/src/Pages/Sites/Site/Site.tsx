import { loadRules } from "actions/rules.actions";
import { getSite, loadSite, selectSite } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";
import OffreMenu from "Global/OffresMenu";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import SiteAbonnements from "./Abonnements";
import SiteProtection from "./Protection/SiteProtection";
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
    dispatch(loadRules(siteID));
  }, []);

  return (
    <OffreMenu
      componentId={siteID}
      componentOne={<SiteSettings />}
      componentOneText="Settings"
      componentTwo={<SiteAbonnements site={site} />}
      componentTwoText="Abonnements"
      componentThree={<SiteProtection siteID={siteID} />}
      componentThreeText="Règles d'accès"
      componentFour={<SiteUsers />}
      componentFourText="Users"
    />
  );
}
