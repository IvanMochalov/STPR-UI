import { createContext } from "react";

import { IMediaContext } from "../types";

export const MediaContext = createContext<IMediaContext>({
  device: {
    isDesktop: false,
    isMobile: false,
    isTablet: false,
  },
});
