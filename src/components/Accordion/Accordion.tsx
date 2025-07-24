import cx from "clsx";
import React, {useState} from "react";

import {Icon, IconName} from "../Icons";
import styles from "./Accordion.module.scss"
import {useContentHeight} from "./hooks";
import {AccordionProps} from "./types";

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
    } = props;
    const [open, setOpen] = useState(defaultOpen);
    const {contentRef, height} = useContentHeight(open);

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
        [propsClassNameRoot]: propsClassNameRoot,
    });

    const classNameHeader = cx({
        [styles.spAccordion__header]: true,
        [props.classNameHeader]: props.classNameHeader,
    });

    const classNameTitle = cx({
        [styles.spAccordion__name]: true,
        [styles.spAccordion__name_hiddenExpand]: isHiddenExpandIcon,
        [props.classNameTitle]: props.classNameTitle,
    });

    const classNameIcon = cx({
        [styles.spAccordion__icon]: true,
        [styles.spAccordion__icon_hidden]: isHiddenExpandIcon,
        [props.classNameIcon]: props.classNameIcon,
    });

    const classNameChildrenWrapper = cx({
        [styles.spAccordion__childrenWrapper]: true,
        [styles.spAccordion__childrenWrapper_open]: open,
        [props.classNameChildrenWrapper]: props.classNameChildrenWrapper,
    });

    return (
        <div className={classNameRoot}>
            <div className={classNameHeader}>
                <div
                    className={classNameTitle}
                    onClick={onClick}
                >
                    {name}
                </div>
                <Icon
                    rotate={open ? 180 : undefined}
                    onClick={onClick}
                    className={classNameIcon}
                    name={IconName.chevronDown}
                />
            </div>
            <div
                className={classNameChildrenWrapper}
                ref={contentRef}
                style={{
                    maxHeight: open ? height : "0px",
                }}
            >
                {children}
            </div>
        </div>
    );
};
