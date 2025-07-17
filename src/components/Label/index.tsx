import React from "react";
import styles from "./label.module.scss";
import cx from 'clsx';

export interface LabelProps {
    required?: boolean
    label?: string
    isVisibleTooltip?: boolean
    tooltip?: JSX.Element
    classNameRoot?: string
}

export const Label: React.FC<LabelProps> = (props) => {
    const {
        required,
        label,
        isVisibleTooltip = true,
        tooltip,
    } = props;

    const classNameRoot = cx(
        styles.spLabel,
        props.classNameRoot && props.classNameRoot,
    );

    const classNameLabelText = cx(
        styles.spLabel__text,
    );

    const classNameLabelRequired = cx(
        required&& styles.spLabel__required,
    );

    const classNameLabelTooltip = cx(
        styles.spLabel__tooltip,
    );

  return (
      <div className={classNameRoot}>
          <label className={classNameLabelText}>
              {label}
          </label>
          {
              required &&
              <div className={classNameLabelRequired}>
                  *
              </div>
          }
          {
              tooltip && isVisibleTooltip &&
              <div className={classNameLabelTooltip}>
                  {tooltip}
              </div>
          }
      </div>
  );
};