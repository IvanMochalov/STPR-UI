import { useMediaQuery } from "react-responsive";

import { TBreakpoints } from "../types";

export const useMediaContext = (breakpoints: TBreakpoints) => {
  const { desktop, tablet, mobile } = breakpoints;

  const isDesktop = useMediaQuery(desktop);
  const isTablet = useMediaQuery(tablet);
  const isMobile = useMediaQuery(mobile);

  return {
    device: {
      isDesktop,
      isTablet,
      isMobile,
    },
  };
};
