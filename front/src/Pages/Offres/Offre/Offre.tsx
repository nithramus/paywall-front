import { getOffre, loadOffres } from "actions/offres.actions";
import { useAppDispatch } from "app/hooks";
import { RootState } from "app/store";
import OffreMenu from "Global/OffresMenu";
import React from "react";
import { useSelector } from "react-redux";
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
  const offre = useSelector((state: RootState) =>
    getOffre(state, match.params.offreId)
  );
  return (
    <div>
      <OffreMenu />

      {offre?.name}
    </div>
  );
}
