import { useCallback } from "react";

import type { TClickOnCellAction } from "../types";

interface IUseTableActionsProps<T> {
  onEdit?: (data: T) => void;
  onDelete?: (key: string) => void;
  onRowClick?: (data: T) => void;
  onCustomAction?: (action: TClickOnCellAction<T>) => void;
}

export const useTableActions = <T extends { key?: string | number; id?: string | number }>({
  onEdit,
  onDelete,
  onRowClick,
  onCustomAction,
}: IUseTableActionsProps<T> = {}) => {
  return useCallback(
    (action: TClickOnCellAction<T>) => {
      // Если есть кастомный обработчик, отдаем ему управление
      if (onCustomAction) {
        onCustomAction(action);
      }

      // Стандартная обработка
      switch (action.clickOn) {
        case "delete":
          if (onDelete) {
            // Поддержка различных полей для идентификатора
            const id =
              ("key" in action.rowData && action.rowData.key) ||
              ("id" in action.rowData && action.rowData.id) ||
              undefined;

            if (id !== undefined) {
              onDelete(String(id));
            }
          }
          break;
        case "edit":
          if (onEdit) {
            onEdit(action.rowData);
          }
          break;
        case "row":
          if (onRowClick) {
            onRowClick(action.rowData);
          }
          break;
        default:
          break;
      }
    },
    [onEdit, onDelete, onRowClick, onCustomAction],
  );
};
