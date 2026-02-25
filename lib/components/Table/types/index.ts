import type { Dispatch, ReactNode } from "react";

export interface TableProps<TData extends Record<string, any> = any> {
  data: TData[];
  columns: TColumn<TData>[];
  dispatch?: Dispatch<TClickOnCellAction<TData>>;
  classNameRoot?: string;
  classNameTableRoot?: string;
  classNameTdContentRoot?: string;
  renderCellContent?: (row: TData, col: TColumn<TData>) => ReactNode;
  styleVariant?: TTableStyleVariant;
  noData?: {
    isVisibleHeader?: boolean;
    noDataText?: string;
  };
  loading?: boolean;
  hasError?: boolean;
  errorText?: string;
}

export type TClickOnCellAction<TData> = {
  clickOn: string;
  rowData: TData;
};

export type TTableStyleVariant = "default" | "znp";

export type TColumn<TData> = {
  key: keyof TData | TDefaultColumnKey;
  title: string;
  isVisible?: boolean;
  isClickable?: boolean;
  isSortable?: boolean;
  isDisabled?: boolean;
  width?: number;
  renderCell?: (row: TData, col: TColumn<TData>) => ReactNode;
  sortBy?: keyof TData;
};

export type TSortState<TData> = {
  key: keyof TData | TDefaultColumnKey;
  direction: "asc" | "desc";
};

export type TDefaultColumnKey = "controls" | "deleteControl" | "editControl";
