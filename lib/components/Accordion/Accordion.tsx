import cx from "clsx";
import React, { useState } from "react";

import { EIconName, Icon } from "../Icons";
import styles from "./Accordion.module.scss";
import { AccordionProps } from "./types";

// TODO
//  В дальнейшем реализовать через HTML тег details
export const Accordion: React.FC<AccordionProps> = (props) => {
  const {
    name,
    children,
    defaultOpen = false,
    isHiddenExpandIcon = false,
    onOpen,
    noBorder = false,
    noPadding = false,
    level = 1,
    classNameRoot: propsClassNameRoot,
    classNameHeader: propsClassNameHeader,
    classNameTitle: propsClassNameTitle,
    classNameIcon: propsClassNameIcon,
    classNameChildrenWrapper: propsClassNameChildrenWrapper,
  } = props;

  const [open, setOpen] = useState(defaultOpen);

  const onClick = () => {
    if (isHiddenExpandIcon) return;
    onOpen?.(!open);
    setOpen(!open);
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
    [styles[`spAccordion__name--level-${level}`]]: level,
    [styles.spAccordion__name_hiddenExpand]: isHiddenExpandIcon,
    ...(propsClassNameTitle && { [propsClassNameTitle]: true }),
  });

  const classNameIcon = cx({
    [styles.spAccordion__icon]: true,
    [styles.spAccordion__icon_open]: open,
    [styles.spAccordion__icon_hidden]: isHiddenExpandIcon,
    ...(propsClassNameIcon && { [propsClassNameIcon]: true }),
  });

  const classNameChildrenWrapper = cx({
    [styles.spAccordion__childrenWrapper]: true,
    [styles.spAccordion__childrenWrapper_open]: open,
    ...(propsClassNameChildrenWrapper && { [propsClassNameChildrenWrapper]: true }),
  });

  const classNameChildrenContent = cx({
    [styles.spAccordion__content]: true,
    [styles.spAccordion__content_open]: open,
  });

  return (
    <div className={classNameRoot}>
      <div className={classNameHeader}>
        <div className={classNameTitle}>
          <span onClick={onClick}>{name}</span>
        </div>
        <Icon onClick={onClick} className={classNameIcon} name={EIconName.ChevronDown} />
      </div>
      <div className={classNameChildrenWrapper}>
        <div className={classNameChildrenContent}>{children}</div>
      </div>
    </div>
  );
};
