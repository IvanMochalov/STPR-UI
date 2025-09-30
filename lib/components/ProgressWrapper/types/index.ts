import { PropsWithChildren } from "react";

export type TProgressWrapperAnimationVariant = "pulse" | "backgroundProgress";

export interface ProgressWrapperProps extends PropsWithChildren {
  value: number;
  classNameRoot?: string;
  classNameProgressBadgeRoot?: string;
  duration?: number;
  doneValue?: number;
  animationVariant?: TProgressWrapperAnimationVariant;
  onSuccessLoaded?: () => void;
}

export type TUseAnimatedValueProps = {
  targetValue: number;
  doneValue: number;
  duration?: number;
  onSuccessLoaded?: () => void;
};
