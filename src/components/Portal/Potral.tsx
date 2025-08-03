import React from "react";
import ReactDOM from "react-dom";

import { PortalProps } from "./types";

export const Portal: React.FC<PortalProps> = ({ children, node }) =>
  node ? ReactDOM.createPortal(children, node) : null;
