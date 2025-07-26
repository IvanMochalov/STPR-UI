import React from "react";

export interface AccordionProps extends React.PropsWithChildren {
  name?: string;
  onOpen?: (open: boolean) => void;
  defaultOpen?: boolean;
  isHiddenExpandIcon?: boolean;
  noBorder?: boolean;
  noPadding?: boolean;
  classNameRoot?: string;
  classNameHeader?: string;
  classNameTitle?: string;
  classNameIcon?: string;
  classNameChildrenWrapper?: string;
}
