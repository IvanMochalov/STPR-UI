import cx from "clsx";
import React from "react";

import { Icon } from "../Icons";
import styles from "./ContextMenu.module.scss";
import { ContextMenuProps } from "./types";

export const ContextMenu: React.FC<ContextMenuProps> = (props) => {
  const { list, classNameRoot: propsClassNameRoot } = props;

  const classNameRoot = cx({
    [styles.spContextMenu]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  return (
    <ul className={classNameRoot}>
      {list?.map(({ label, iconName, key }) => {
        const isDeleteControl = key === "delete";
        return (
          <li
            key={key}
            className={cx({
              [styles.spContextMenu__item]: true,
              [styles.spContextMenu__item_deleteItem]: isDeleteControl,
            })}
          >
            {iconName && <Icon name={iconName} />}
            {label}
          </li>
        );
      })}
    </ul>
  );
};
