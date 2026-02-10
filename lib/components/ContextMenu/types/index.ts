import { EIconName } from "../../Icons";

export interface ContextMenuProps {
  classNameRoot?: string;
  options: Array<TContextMenuOption> | [];
  onClickItem?: (option: TContextMenuOption) => void;
}

export type TContextMenuOption = {
  key?: string;
  value?: string;
  label?: string;
  iconName?: EIconName;
};
