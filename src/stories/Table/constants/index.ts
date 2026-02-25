import { TColumn } from "../../../../lib/components/Table";

export interface SampleRow {
  key: string;
  name: string;
  description: string;
  count?: number;
}

export const defaultTableData: SampleRow[] = [
  { key: "1", name: "_1_", description: "Файл архива", count: 10 },
  { key: "2", name: "_1__01", description: "FBX-файл ОКС", count: 5 },
  { key: "3", name: "_1__Ground", description: "FBX-файл благоустройства", count: 3 },
  { key: "4", name: "SM_1__Main", description: "Объект геометрии ОКС", count: 12 },
  { key: "5", name: "SM_1__MainGlass", description: "Объект полупрозрачных деталей ОКС", count: 8 },
  { key: "6", name: "SM_1__Ground", description: "Объект геометрии благоустройство", count: 7 },
  { key: "7", name: "T_1__Main_d_1", description: "Текстуры диффузного цвета ОКС", count: 4 },
  { key: "8", name: "M_1__Main_1", description: "Материал ОКС", count: 1 },
];

export const defaultColumns: TColumn<SampleRow>[] = [
  { key: "name", title: "Наименование", isSortable: true, width: 200 },
  { key: "description", title: "Описание" },
  { key: "count", title: "Кол-во", width: 80 },
];
