import { PropsWithChildren } from "react";

export interface ProgressWrapperProps extends PropsWithChildren {
  value: number;
  classNameRoot?: string;
  classNameProgressBadgeRoot?: string;
  duration?: number;
  doneValue?: number;
  animationVariant?: "pulse" | "backgroundProgress";
  onSuccessLoaded?: () => void;
}

export type TUseAnimatedValueProps = {
  targetValue: number;
  doneValue: number;
  duration?: number;
  onSuccessLoaded?: () => void;
};
