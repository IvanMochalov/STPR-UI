export interface TableProps {
  isNotTableOnNotDesktop?: boolean;
  data: TTableRowsData;
  columns: TTableColumnsData;
  classNameRoot?: string;
  isDesktop?: boolean;
}

export type TTableRowsData = TTableRowsDataItem[];

export type TTableRowsDataItem = {
  name: string;
  description?: string;
};

export type TTableColumnsData = TTableColumnsDataItem[];

export type TTableColumnsDataItem = {
  key: keyof TTableRowsDataItem;
  title: string;
  isBeCopiedValue?: boolean;
  isColorContentsCurlyBrackets?: boolean;
  isVisible?: boolean;
};

export interface HandleCopyToClipboardProps {
  text: string;
  rowIndex: number;
  colIndex: number;
}
