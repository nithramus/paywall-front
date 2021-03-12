import OffreMenu from "Global/OffresMenu";
import React from "react";
import { RouteComponentProps } from "react-router";
import OffreSettings from "./Settings";
import Sites from "./Sites";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
export default function Offre({
  match,
}: RouteComponentProps<{ offreId: string }>) {
  return (
    <div>
      <OffreMenu
        componentId={parseInt(match.params.offreId)}
        componentOne={<OffreSettings />}
        componentOneText="Settings"
        componentTwo={<Sites />}
        componentTwoText="Sites"
        componentThree={<div>Users</div>}
        componentThreeText="Utilisateurs"
      />
    </div>
  );
}
