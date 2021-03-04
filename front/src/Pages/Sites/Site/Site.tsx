import { getSite, loadSites } from "actions/sites.actions";
import { useAppDispatch } from "app/hooks";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
export default function Site({
  match,
}: RouteComponentProps<{ siteId: string }>) {
  const site = useSelector((state: RootState) =>
    getSite(state, match.params.siteId)
  );
  return <div>{site?.name}</div>;
}
