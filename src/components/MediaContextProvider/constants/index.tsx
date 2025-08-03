import React, { createContext } from "react";

import { IMediaContext } from "../types";

export const MediaContext: React.Context<IMediaContext> = createContext<IMediaContext>({
  device: {
    isDesktop: false,
    isMobile: false,
    isTablet: false,
  },
});
