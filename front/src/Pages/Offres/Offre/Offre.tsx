import OffreMenu from "Global/OffresMenu";
import React from "react";
import { RouteComponentProps } from "react-router";

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
      <OffreMenu offreId={match.params.offreId} />
    </div>
  );
}
