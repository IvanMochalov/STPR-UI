import {ReactNode} from "react";

export interface AccordionProps {
    name?: string,
    children: ReactNode,
    onOpen?: (open: boolean) => void,
    defaultOpen?: boolean,
    isHiddenExpandIcon?: boolean,
    noBorder?: boolean,
    noPadding?: boolean,
    classNameRoot?: string,
    classNameHeader?: string,
    classNameTitle?: string,
    classNameIcon?: string,
}