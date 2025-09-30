import React from "react";

export interface AuthProtectedProps {
  children: React.ReactNode;
  isNeedAuthorized: boolean;
  onClickAuthorization?: () => void;
  unauthorizedMessage?: string;
  authButtonText?: string;
  confirmSize?: "md" | "lg";
  zIndex?: number;
}
