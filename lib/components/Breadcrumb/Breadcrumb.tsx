import cx from "clsx";
import React from "react";

import { EIconName, Icon } from "../Icons";
import styles from "./Breadcrumb.module.scss";
import { BreadcrumbProps } from "./types";

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const {
    classNameRoot: propsClassNameRoot,
    classNameListRoot: propsClassNameListRoot,
    crumbsList = [],
  } = props;

  const classNameRoot = cx({
    [styles.spBreadcrumb]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameListRoot = cx({
    [styles.spBreadcrumb__list]: true,
    ...(propsClassNameListRoot && { [propsClassNameListRoot]: true }),
  });

  return (
    <nav aria-label="breadcrumb" className={classNameRoot}>
      <ol className={classNameListRoot}>
        {crumbsList.map(({ text, onClick, active }, i) => {
          return (
            <li
              key={i}
              className={cx(
                styles.spBreadcrumb__listItem,
                active && styles.spBreadcrumb__listItem_active,
              )}
            >
              <span title={text} className={styles.spBreadcrumb__listItem__text} onClick={onClick}>
                {text}
              </span>
              <div className={styles.spBreadcrumb__listItem__separator}>
                <Icon name={EIconName.SelectChevronDown} rotate={-90} />
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
