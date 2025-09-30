import React, { useEffect, useState } from "react";

import { Confirm } from "../Confirm";
import { AuthProtectedProps } from "./types";

export const AuthProtected: React.FC<AuthProtectedProps> = (props) => {
  const {
    children,
    isNeedAuthorized,
    onClickAuthorization,
    unauthorizedMessage = "Необходимо авторизоваться",
    authButtonText = "Авторизоваться",
    confirmSize = "md",
    zIndex = 999,
  } = props;
  const [showAuthModal, setShowAuthModal] = useState(isNeedAuthorized);

  useEffect(() => {
    setShowAuthModal(isNeedAuthorized);
  }, [isNeedAuthorized]);

  const handleClickAuthorization = () => {
    setShowAuthModal(false);
    onClickAuthorization && onClickAuthorization();
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
          submit={handleClickAuthorization}
        />
      )}
    </>
  );
};
