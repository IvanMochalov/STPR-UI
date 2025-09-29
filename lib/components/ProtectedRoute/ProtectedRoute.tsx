import React, { useEffect, useState } from "react";

import { Confirm } from "../Confirm";
import { ProtectedRouteProps } from "./types";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const {
    children,
    isNeedAuthorized,
    onAuthRedirect,
    unauthorizedMessage = "Необходимо авторизоваться",
    authButtonText = "Авторизоваться",
    confirmSize = "md",
    zIndex = 999,
  } = props;
  const [showAuthModal, setShowAuthModal] = useState(isNeedAuthorized);

  useEffect(() => {
    setShowAuthModal(isNeedAuthorized);
  }, [isNeedAuthorized]);

  const handleAuthRedirect = () => {
    setShowAuthModal(false);
    onAuthRedirect();
  };

  return (
    <>
      {children}
      {showAuthModal && (
        <Confirm
          zIndex={zIndex}
          isVisibleCloseButton={false}
          textAlign={"center"}
          applyButtonsAlign={"center"}
          header={unauthorizedMessage}
          submitBtnContent={authButtonText}
          size={confirmSize}
          submit={handleAuthRedirect}
        />
      )}
    </>
  );
};
