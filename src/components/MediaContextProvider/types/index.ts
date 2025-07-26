import React from "react";

export type TBreakpoints = {
  desktop: {
    minWidth: number;
  };
  tablet: {
    minWidth: number;
    maxWidth: number;
  };
  mobile: {
    maxWidth: number;
  };
};

export interface MediaContextProviderProps extends React.PropsWithChildren {
  breakpoints: TBreakpoints;
}

export interface IMediaContext {
  device: {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
  };
}
