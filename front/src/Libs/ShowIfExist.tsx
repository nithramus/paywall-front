import React, { FunctionComponent } from "react";

// no children defined here
type CardProps = {
  property: Boolean;
};

// undestructured
export const Card: FunctionComponent<CardProps> = (props) => {
  if (!props.property) return null;
  return <div>{props.children}</div>;
};
