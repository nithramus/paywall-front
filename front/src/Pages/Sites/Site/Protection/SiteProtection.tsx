import { getRules } from "actions/rules.actions";
import { getSite } from "actions/sites.actions";
import NewAccessRuleForm from "Components/NewAccessRuleForm";
import NewModal from "Components/NewModal";
import NewOffreForm from "Components/NewOffreForm";
import React from "react";
import { useSelector } from "react-redux";

export default function SiteProtection(props: { siteID: number }) {
  const rules = useSelector(getRules);
  let rulesList = rules.map((rule) => {
    return <div>{rule.Name}</div>;
  });

  return (
    <div>
      <NewModal
        component={NewAccessRuleForm}
        siteID={props.siteID}
        buttonText="Ajotuerrègle"
      />
      {rulesList}
    </div>
  );
}
