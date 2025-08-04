import { EIconName } from "../../Icons";

export interface ContextMenuProps {
  list: TContextMenuItem[];
  classNameRoot?: string;
  parentId?: string;
}

export type TContextMenuItem = {
  key?: string;
  label?: string;
  iconName?: EIconName;
  onClick?: (id?: string) => void;
};
