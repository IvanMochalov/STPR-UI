import cx from "clsx";
import React, { useState } from "react";

import { EIconName, Icon } from "../Icons";
import styles from "./Accordion.module.scss";
import { AccordionProps } from "./types";

export const Accordion: React.FC<AccordionProps> = (props) => {
  const {
    name,
    children,
    defaultOpen = false,
    isHiddenExpandIcon = false,
    onOpen,
    noBorder = false,
    noPadding = false,
    classNameRoot: propsClassNameRoot,
    classNameHeader: propsClassNameHeader,
    classNameTitle: propsClassNameTitle,
    classNameIcon: propsClassNameIcon,
    classNameChildrenWrapper: propsClassNameChildrenWrapper,
  } = props;
  const [open, setOpen] = useState(defaultOpen);

  const onClick = () => {
    if (isHiddenExpandIcon) {
      return;
    }

    setOpen(!open);

    onOpen?.(!open);
  };

  const classNameRoot = cx({
    [styles.spAccordion]: true,
    [styles.spAccordion_open]: open,
    [styles.spAccordion_noOpen]: !open,
    [styles.spAccordion_noBorder]: noBorder,
    [styles.spAccordion_noPadding]: noPadding,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameHeader = cx({
    [styles.spAccordion__header]: true,
    ...(propsClassNameHeader && { [propsClassNameHeader]: true }),
  });

  const classNameTitle = cx({
    [styles.spAccordion__name]: true,
    [styles.spAccordion__name_hiddenExpand]: isHiddenExpandIcon,
    ...(propsClassNameTitle && { [propsClassNameTitle]: true }),
  });

  const classNameIcon = cx({
    [styles.spAccordion__icon]: true,
    [styles.spAccordion__icon_hidden]: isHiddenExpandIcon,
    ...(propsClassNameIcon && { [propsClassNameIcon]: true }),
  });

  const classNameChildrenWrapper = cx({
    [styles.spAccordion__childrenWrapper]: true,
    [styles.spAccordion__childrenWrapper_open]: open,
    ...(propsClassNameChildrenWrapper && { [propsClassNameChildrenWrapper]: true }),
  });

  return (
    <div className={classNameRoot}>
      <div className={classNameHeader}>
        <div className={classNameTitle} onClick={onClick}>
          {name}
        </div>
        <Icon
          rotate={open ? 180 : undefined}
          onClick={onClick}
          className={classNameIcon}
          name={EIconName.ChevronDown}
        />
      </div>
      <div className={classNameChildrenWrapper}>
        <div>{children}</div>
      </div>
    </div>
  );
};
