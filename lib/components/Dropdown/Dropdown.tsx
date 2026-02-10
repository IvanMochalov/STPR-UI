import cx from "clsx";
import React, { useState } from "react";

import { EIconName, Icon } from "../Icons";
import { ETooltipPosition, Tooltip } from "../Tooltip";
import styles from "./Dropdown.module.scss";
import { DropdownProps } from "./types";

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    labelText = "Выпадающий список",
    listName,
    dropdownList = [],
    dropdownPosition = ETooltipPosition.BottomRight,
    classNameRoot: propsClassNameRoot,
  } = props;

  const classNameRoot = cx({
    [styles.spDropdown]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameLabelText = cx({
    [styles.spDropdown__labelText]: true,
  });

  const classNameTooltipContainer = cx({
    [styles.spDropdown__tooltipContainer]: true,
  });

  const classNameDropdownList = cx({
    [styles.spDropdown__dropdownList]: true,
  });

  const classNameDropdownListHeader = cx({
    [styles.spDropdown__dropdownListHeader]: true,
  });

  const classNameDropdownListItemDescription = cx({
    [styles.spDropdown__downloadListItemDescription]: true,
  });

  const [isOpen, setOpen] = useState<boolean>(false);

  const renderTooltipContent = () => {
    return (
      <div className={classNameDropdownList}>
        {listName && <div className={classNameDropdownListHeader}>{listName}</div>}
        {dropdownList.map((item, index) => {
          return (
            <div
              key={index}
              className={cx({
                [styles.spDropdown__dopdownListItem]: true,
                [styles.spDropdown__dopdownListItem_textCenter]: item.textCenter,
              })}
              onClick={item.onClick}
            >
              {item.name}
              {item.description && (
                <span className={classNameDropdownListItemDescription}>{item.description}</span>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Tooltip
      hover={false}
      triggerAction={() => setOpen(true)}
      actionOnClose={() => setOpen(false)}
      text={renderTooltipContent()}
      position={dropdownPosition}
      noPadding={true}
      isToggleClick={true}
      isStopPropagationClickOnTrigger={true}
      trigger={
        <div className={classNameRoot}>
          <div className={classNameLabelText}>{labelText}</div>
          <div className={classNameTooltipContainer}>
            <Icon name={EIconName.SelectChevronDown} rotate={isOpen ? 180 : undefined} />
          </div>
        </div>
      }
    />
  );
};
