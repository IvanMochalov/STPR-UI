import React from "react";

export interface ProtectedRouteProps {
  children: React.ReactNode;
  isNeedAuthorized: boolean;
  onAuthRedirect?: () => void;
  unauthorizedMessage?: string;
  authButtonText?: string;
  confirmSize?: "md" | "lg";
  zIndex?: number;
}
