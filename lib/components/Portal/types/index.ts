import React from "react";

export interface PortalProps extends React.PropsWithChildren {
  node?: Element | DocumentFragment | null;
  classNameRoot?: string;
}
