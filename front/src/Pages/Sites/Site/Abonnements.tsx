import { Button } from "@material-ui/core";
import NewModal from "Components/NewModal";
import NewOffreForm from "Components/NewOffreForm";
import SelectOffre from "Pages/Sites/Site/Offres/SelectOffre";

export default function SiteAbonnements(props: { site: Site }) {
  const offres = props.site.Offres.map((offre) => {
    return <div>{offre.Name}</div>;
  });
  return (
    <div>
      <NewModal
        component={NewOffreForm}
        siteID={props.site.ID}
        buttonText="Créer un nouvel abonnement pour ce site"
      />
      <NewModal
        component={SelectOffre}
        siteID={props.site.ID}
        buttonText="Ajouter à un abonnement existant"
      />
      {offres}
    </div>
  );
}
