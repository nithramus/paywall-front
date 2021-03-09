import { getSites } from "actions/sites.actions";
import NewModal from "Components/NewModal";
import { useSelector } from "react-redux";
export default function Sites() {
  const sites = useSelector(getSites);
  const siteList = sites.map((site) => {
    return <div>{site.Name}</div>;
  });
  return (
    <div>
      <NewModal buttonText="Ajouter un site"></NewModal>
    </div>
  );
}
