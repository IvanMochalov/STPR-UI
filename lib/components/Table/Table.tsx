import cx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { BaseTooltip } from "../BaseTooltip";
import { EllipsisTextWithTooltip } from "../EllipsisTextWithTooltip";
import { EIconName, Icon } from "../Icons";
import { Spinner } from "../Spinner";
import styles from "./Table.module.scss";
import type { TableProps, TColumn, TSortState } from "./types";
import { isNumber, isString } from "./utils";

export const Table = <TData extends Record<string, any>>(props: TableProps<TData>) => {
  const {
    columns,
    data,
    dispatch,
    styleVariant = "default",
    classNameRoot: propsClassNameRoot,
    classNameTableRoot: propsClassNameTableRoot,
    classNameTdContentRoot: propsClassNameTdContentRoot,
    renderCellContent,
    noData = { isVisibleHeader: true, noDataText: "Нет данных" },
    loading = false,
    hasError = false,
    errorText = "",
  } = props;

  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const [tbodyHeight, setTbodyHeight] = useState<number>(60);
  const [sortState, setSortState] = useState<TSortState<TData> | null>(null);

  // Сохраняем высоту tbody когда есть данные
  useEffect(() => {
    if (tbodyRef.current && data && data.length > 0 && !loading) {
      const height = tbodyRef.current.offsetHeight;
      if (height > 60) {
        setTbodyHeight(height);
      }
    }
  }, [data, loading]);

  // Функция для получения реального поля для сортировки
  const getSortField = useCallback((column: TColumn<TData>): keyof TData => {
    return column.sortBy || column.key;
  }, []);

  // Функция для сортировки данных
  const sortedData = React.useMemo(() => {
    if (!sortState || !data.length) return data;

    return [...data].sort((a, b) => {
      // Используем реальное поле для сортировки
      const column = columns.find((col) => col.key === sortState.key);
      if (!column) return 0;

      const sortField = getSortField(column);
      const aValue = a[sortField];
      const bValue = b[sortField];

      // Если значения undefined или null
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return sortState.direction === "asc" ? -1 : 1;
      if (bValue == null) return sortState.direction === "asc" ? 1 : -1;

      // Для строк
      if (isString(aValue) && isString(bValue)) {
        return sortState.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      // Для чисел
      if (isNumber(aValue) && isNumber(bValue)) {
        if (aValue < bValue) return sortState.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortState.direction === "asc" ? 1 : -1;
        return 0;
      }

      // Для разных типов
      const aString = String(aValue);
      const bString = String(bValue);

      return sortState.direction === "asc"
        ? aString.localeCompare(bString)
        : bString.localeCompare(aString);
    });
  }, [sortState, data, columns, getSortField]);

  // Обработчик клика по заголовку сортируемой колонки
  const handleHeaderClick = (column: TColumn<TData>) => {
    if (!column.isSortable) return;

    if (sortState?.key === column.key) {
      // Меняем направление сортировки
      setSortState({
        key: column.key,
        direction: sortState.direction === "asc" ? "desc" : "asc",
      });
    } else {
      // Новая сортировка
      setSortState({
        key: column.key,
        direction: "asc",
      });
    }
  };

  // Функция для получения иконки сортировки
  const getSortIcon = (column: TColumn<TData>) => {
    if (!column.isSortable) return null;

    if (sortState?.key === column.key) {
      return sortState.direction === "asc" ? "↑" : "↓";
    }

    return "↕";
  };

  const classNameWrapperRoot = cx({
    [styles.tableWrapperRoot]: true,
    [styles.tableWrapperRoot_hasError]: hasError,
  });

  const classNameRoot = cx({
    [styles.tableWrapper]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameRootTable = cx({
    [styles.table]: true,
    [styles[`table--variant-${styleVariant}`]]: styleVariant,
    ...(propsClassNameTableRoot && { [propsClassNameTableRoot]: true }),
  });

  const classNameTdContent = cx({
    [styles.table__tdContent]: true,
    ...(propsClassNameTdContentRoot && { [propsClassNameTdContentRoot]: true }),
  });

  // Обновляем renderTableCell с правильными типами
  const renderTableCell = (row: TData, col: TColumn<TData>) => {
    // 1. Проверяем есть ли рендер для конкретной колонки
    if (col.renderCell) {
      return <div className={classNameTdContent}>{col.renderCell(row, col)}</div>;
    }

    // 2. Для колонки controls и control рендерим дефолтные контролы
    if (col.key === "controls") {
      const isDisabled = Boolean(col.isDisabled);

      return (
        <div className={classNameTdContent}>
          <div className={styles.table__controlWrapper}>
            <Icon
              name={EIconName.Edit}
              className={cx(
                styles.table__controlWrapper__control,
                isDisabled && styles.table__controlWrapper__control_disabled,
              )}
              onClick={(e) => {
                e.stopPropagation();

                dispatch?.({
                  clickOn: "edit",
                  rowData: row,
                });
              }}
            />
            <Icon
              name={EIconName.Trash}
              className={cx(
                styles.table__controlWrapper__control,
                isDisabled && styles.table__controlWrapper__control_disabled,
              )}
              onClick={(e) => {
                e.stopPropagation();

                dispatch?.({
                  clickOn: "delete",
                  rowData: row,
                });
              }}
            />
          </div>
        </div>
      );
    }

    if (col.key === "deleteControl") {
      const isDisabled = Boolean(col.isDisabled);

      return (
        <div className={classNameTdContent}>
          <div className={styles.table__controlWrapper}>
            <Icon
              name={EIconName.Trash}
              className={cx(
                styles.table__controlWrapper__control,
                isDisabled && styles.table__controlWrapper__control_disabled,
              )}
              onClick={(e) => {
                e.stopPropagation();

                if (dispatch) {
                  dispatch({
                    clickOn: "delete",
                    rowData: row,
                  });
                }
              }}
            />
          </div>
        </div>
      );
    }

    if (col.key === "editControl") {
      const isDisabled = Boolean(col.isDisabled);

      return (
        <div className={classNameTdContent}>
          <div className={styles.table__controlWrapper}>
            <Icon
              name={EIconName.Edit}
              className={cx(
                styles.table__controlWrapper__control,
                isDisabled && styles.table__controlWrapper__control_disabled,
              )}
              onClick={(e) => {
                e.stopPropagation();

                if (dispatch) {
                  dispatch({
                    clickOn: "edit",
                    rowData: row,
                  });
                }
              }}
            />
          </div>
        </div>
      );
    }

    // 3. Проверяем есть ли глобальный рендер
    if (renderCellContent) {
      return <div className={classNameTdContent}>{renderCellContent(row, col)}</div>;
    }

    // 4. Дефолтный рендер
    const hasClickHandler = Boolean(col.isClickable);
    const cellValue = row[col.key];

    return (
      <div className={classNameTdContent}>
        <EllipsisTextWithTooltip
          onClick={(e) => {
            if (hasClickHandler) {
              e.stopPropagation();

              dispatch?.({
                clickOn: String(col.key),
                rowData: row,
              });
            }
          }}
          classNameBaseTooltipRoot={styles.tooltip}
          isInheritFontStyles={true}
          text={cellValue ? String(cellValue) : "-"}
          isCursorPointerByOnClick={hasClickHandler}
        />
      </div>
    );
  };

  const renderTableHeader = () => {
    if (!noData.isVisibleHeader && (!data || data.length === 0)) {
      return null;
    }

    return (
      <thead>
        <tr>
          {columns.map((col, index) => {
            const sortIcon = getSortIcon(col);
            const isSortable = col.isSortable;

            return (
              <th
                key={index}
                onClick={() => handleHeaderClick(col)}
                className={cx(isSortable && styles.table__sortableHeader)}
              >
                <div className={styles.table__headerContent}>
                  <span>{col.title}</span>
                  {sortIcon && <span className={styles.table__sortIcon}>{sortIcon}</span>}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    // Состояние загрузки
    if (loading) {
      return (
        <tbody ref={tbodyRef} style={{ height: `${tbodyHeight}px` }}>
          <tr>
            <td colSpan={columns.length}>
              <div className={styles.table__loadingWrapper}>
                <Spinner size={"lg"} />
              </div>
            </td>
          </tr>
        </tbody>
      );
    }

    // Состояние "нет данных"
    if (!data || data.length === 0) {
      return (
        <tbody ref={tbodyRef}>
          <tr>
            <td colSpan={columns.length}>
              <div className={styles.table__noDataWrapper}>{noData.noDataText}</div>
            </td>
          </tr>
        </tbody>
      );
    }

    // Нормальное состояние с данными
    return (
      <tbody ref={tbodyRef}>
        {sortedData.map((row, rowIndex) => {
          if (!row) {
            return null;
          }

          return (
            <tr
              key={rowIndex}
              onClick={(e) => {
                e.stopPropagation();

                if (dispatch) {
                  dispatch({
                    clickOn: "row",
                    rowData: row,
                  });
                }
              }}
            >
              {columns.map((col, colIndex) => (
                <td key={`${rowIndex}:${colIndex}`}>{renderTableCell(row, col)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  };

  const renderTable = () => {
    return (
      <table className={classNameRootTable}>
        <colgroup>
          {columns.map(({ width }, index) => {
            return (
              <col
                key={index}
                style={{
                  width: width ? `${width}px` : undefined,
                }}
              />
            );
          })}
        </colgroup>
        {renderTableHeader()}
        {renderTableBody()}
      </table>
    );
  };

  const renderRoot = () => {
    return (
      <div className={classNameWrapperRoot}>
        {hasError && (
          <BaseTooltip
            text={errorText}
            classNameRoot={cx(
              styles.tableWrapperRoot__errorTooltip,
              styles.tooltip,
              styles.tooltip_hasError,
            )}
            classNameContentRoot={styles.tooltip__content}
          />
        )}
        <div className={classNameRoot}>{renderTable()}</div>
      </div>
    );
  };

  return renderRoot();
};
