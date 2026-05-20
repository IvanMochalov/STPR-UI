import React from "react";

import { TModalSize } from "../../Modal/types";

export interface AuthProtectedProps {
  children: React.ReactNode;
  isNeedAuthorized: boolean;
  onClickAuthorization?: () => void;
  unauthorizedMessage?: string;
  authButtonText?: string;
  confirmSize?: TModalSize;
  zIndex?: number;
}
