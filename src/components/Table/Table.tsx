import cx from "clsx";
import React, { useContext, useState } from "react";

import { isNullOrWhitespace } from "../../utils";
import { EIconName, Icon } from "../Icons";
import { MediaContext } from "../MediaContextProvider";
import styles from "./Table.module.scss";
import {
  HandleCopyToClipboardProps,
  TableProps,
  TTableColumnsDataItem,
  TTableRowsDataItem,
} from "./types";

export const Table: React.FC<TableProps> = (props) => {
  const {
    columns,
    data,
    isNotTableOnNotDesktop = false,
    classNameRoot: propsClassNameRoot,
  } = props;

  const _columns = columns
    .map((col) => {
      return {
        ...col,
        isVisible: data.some((dataItem) => Boolean(dataItem[col.key])),
      };
    })
    .filter((col) => col.isVisible);

  const classNameRoot = cx({
    [styles.spTable]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameTdContent = cx({
    [styles.spTable__tdContent]: true,
  });

  const classNameTdColorContent = cx({
    [styles.spTable__tdColorContent]: true,
  });

  const classNameEmptyPage = cx({
    [styles.spTable__emptyPage]: true,
  });

  const {
    device: { isDesktop },
  } = useContext(MediaContext);

  const [copiedCell, setCopiedCell] = useState<{ rowIndex: number; colIndex: number } | null>(null);

  const handleCopyToClipboard = (props: HandleCopyToClipboardProps) => {
    const { text, rowIndex, colIndex } = props;

    if (copiedCell?.rowIndex === rowIndex && copiedCell?.colIndex === colIndex) {
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedCell({ rowIndex, colIndex });
      })
      .catch((err) => {
        console.error("Ошибка при копировании:", err);
      });
  };

  const handleMouseLeave = () => {
    setCopiedCell(null);
  };

  const renderEmptyPage = () => {
    return <div className={classNameEmptyPage}>Данные отсутствуют</div>;
  };

  const getColorContent = ({
    row,
    col,
  }: {
    row: TTableRowsDataItem;
    col: TTableColumnsDataItem;
  }) => {
    const cellValue = row[col.key];
    if (!cellValue) return null;

    const [text, colorText] = cellValue.split(/\s*\{\{|}}\s*/).filter(Boolean);

    return (
      <span>
        {text}
        {colorText && <span className={classNameTdColorContent}>{` ${colorText}`}</span>}
      </span>
    );
  };

  const renderTable = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      return (
        <table className={classNameRoot}>
          <colgroup>
            {_columns.map((_, index, arr) => {
              return (
                <col
                  key={index}
                  style={{
                    width: `calc(100%/${arr.length})`,
                  }}
                />
              );
            })}
          </colgroup>
          <thead>
            <tr>
              {_columns.map((col, index) => {
                return <th key={index}>{col.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => {
              if (!row) {
                return null;
              }

              return (
                <tr key={rowIndex}>
                  {_columns.map((col, colIndex) => {
                    const isCellCopied =
                      copiedCell?.rowIndex === rowIndex && copiedCell?.colIndex === colIndex;

                    return (
                      <td
                        key={`${rowIndex}:${colIndex}`}
                        onMouseLeave={isCellCopied ? handleMouseLeave : undefined}
                      >
                        <div className={classNameTdContent}>
                          <span>
                            {col.isColorContentsCurlyBrackets
                              ? getColorContent({ row, col })
                              : row[col.key]}
                          </span>
                          {!isNullOrWhitespace(row[col.key]) && col.isBeCopiedValue && (
                            <Icon
                              className={cx({
                                [styles.spTable__tdContentCopyIcon]: true,
                                [styles.spTable__tdContentCopyIcon_copied]: isCellCopied,
                              })}
                              name={isCellCopied ? EIconName.Check : EIconName.Copy}
                              onClick={() => {
                                const text = row[col.key];
                                if (!text) return null;

                                handleCopyToClipboard({
                                  text,
                                  rowIndex,
                                  colIndex,
                                });
                              }}
                            />
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }

    return renderEmptyPage();
  };

  const renderStringsGroup = () => {
    if (data && Array.isArray(data) && data.length > 0) {
      return (
        <div
          className={cx({
            [styles.spStringsGroup]: true,
          })}
        >
          {data.map((row, rowIndex) => {
            if (!row) {
              return null;
            }

            return (
              <div key={rowIndex}>
                {_columns.map((col, colIndex) => {
                  if (isNullOrWhitespace(row[col.key])) {
                    return null;
                  }

                  const isCellCopied =
                    copiedCell?.rowIndex === rowIndex && copiedCell?.colIndex === colIndex;

                  return (
                    <div
                      key={colIndex}
                      className={cx({
                        [styles.spStringsGroup__groupItem]: true,
                      })}
                      onMouseLeave={isCellCopied ? handleMouseLeave : undefined}
                    >
                      <div
                        className={cx({
                          [styles.spStringsGroup__groupItemHeader]: true,
                        })}
                      >
                        {col.title}
                      </div>
                      <div
                        className={cx({
                          [styles.spStringsGroup__groupItemContent]: true,
                        })}
                      >
                        <span>{row[col.key]}</span>
                        {col.isBeCopiedValue && (
                          <Icon
                            className={cx({
                              [styles.spStringsGroup__groupItemContentCopyIcon]: true,
                              [styles.spStringsGroup__groupItemContentCopyIcon_copied]:
                                isCellCopied,
                            })}
                            name={isCellCopied ? EIconName.Check : EIconName.Copy}
                            onClick={() => {
                              const text = row[col.key];
                              if (!text) return null;

                              handleCopyToClipboard({
                                text,
                                rowIndex,
                                colIndex,
                              });
                            }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    }

    return renderEmptyPage();
  };

  const renderAdaptiveContent = () => {
    return isDesktop ? renderTable() : renderStringsGroup();
  };

  return isNotTableOnNotDesktop ? renderAdaptiveContent() : renderTable();
};
