import React from "react";

import {IconName} from "../constants";

export type TIconName = keyof typeof IconName;
export type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: TIconName,
    rotate?: number,
}