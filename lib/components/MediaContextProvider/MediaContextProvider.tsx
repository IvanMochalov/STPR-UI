import React from "react";

import { MediaContext } from "./constants";
import { useMediaContext } from "./hooks";
import { MediaContextProviderProps } from "./types";

export const MediaContextProvider: React.FC<MediaContextProviderProps> = (props) => {
  const {
    breakpoints = {
      desktop: { minWidth: 1440 },
      tablet: { minWidth: 768, maxWidth: 1439 },
      mobile: { maxWidth: 767 },
    },
    children,
  } = props;

  const { device } = useMediaContext(breakpoints);

  return (
    <MediaContext.Provider
      value={{
        device,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
