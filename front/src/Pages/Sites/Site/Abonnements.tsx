import { Button } from "@material-ui/core";
import NewModal from "Components/NewModal";
import NewOffreForm from "Components/NewOffreForm";

export default function SiteAbonnements(props: { site: Site }) {
  const offres = props.site.Offres.map((offre) => {
    return <div>{offre.Name}</div>;
  });
  return (
    <div>
      <NewModal buttonText="Créer un nouvel abonnement pour ce site">
        <NewOffreForm siteID={props.site.ID} />
      </NewModal>
      {offres}
    </div>
  );
}
