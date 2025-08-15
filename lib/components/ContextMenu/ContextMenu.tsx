import cx from "clsx";
import React from "react";

import { Icon } from "../Icons";
import styles from "./ContextMenu.module.scss";
import { ContextMenuProps } from "./types";

export const ContextMenu: React.FC<ContextMenuProps> = (props) => {
  const { onClickItem, options, classNameRoot: propsClassNameRoot } = props;

  const classNameRoot = cx({
    [styles.spContextMenu]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  return (
    <ul className={classNameRoot}>
      {options?.map((option) => {
        const isDeleteControl = option.key === "delete";
        return (
          <li
            key={option.key}
            className={cx({
              [styles.spContextMenu__item]: true,
              [styles.spContextMenu__item_deleteItem]: isDeleteControl,
            })}
            onClick={() => {
              if (onClickItem) {
                onClickItem(option);
              }
            }}
          >
            {option?.iconName && <Icon name={option.iconName} />}
            {option.label}
          </li>
        );
      })}
    </ul>
  );
};
