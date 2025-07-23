import cx from "clsx"
import React, {useState} from "react";

import {useClickOutside} from "../../hooks/useClickOutside.ts";
import {BaseTooltip, ETooltipPosition} from "../BaseTooltip";
import {Icon, IconName} from "../Icons";
import styles from "./Dropdown.module.scss"
import {DropdownProps} from "./types";

export const Dropdown: React.FC<DropdownProps> = (props) => {
    const {
        labelText = "Выпадающий список",
        listName,
        dropdownList = [],
        dropdownPosition = ETooltipPosition.BottomRight
    } = props;

    const classNameRoot = cx({
        [styles.spDropdown]: true,
        [props.classNameRoot]: props.classNameRoot,
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

    const renderTooltipContent = () => {
        return (
            <div className={classNameDropdownList}>
                {listName &&
                    <div className={classNameDropdownListHeader}>
                        {listName}
                    </div>
                }
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
                            {item.description &&
                                <span className={classNameDropdownListItemDescription}>
                                    {item.description}
                                </span>
                            }
                        </div>
                    );
                })}
            </div>
        );
    };

    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useClickOutside<HTMLDivElement>(() => {
        setOpen(false);
    }, isOpen);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        setOpen(prevState => !prevState);
    };

    return (
        <div
            className={classNameRoot}
            ref={ref}
            onClick={handleClick}
        >
            <div className={classNameLabelText}>
                {labelText}
            </div>
            <div className={classNameTooltipContainer}>
                <Icon
                    name={IconName.selectChevronDown}
                    rotate={isOpen ? 180 : undefined}
                />
            </div>
            <BaseTooltip
                classNameRoot={cx({
                    [styles.spDropdown__spTooltip]: true,
                    [styles.spDropdown__spTooltip_isOpen]: isOpen,
                })}
                noPadding={true}
                position={dropdownPosition}
                text={renderTooltipContent()}
            />
        </div>
    );
};
