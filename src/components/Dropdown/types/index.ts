import { ETooltipPosition } from "../../Tooltip";

export type TDropdownListItem = {
  name: string;
  onClick?: () => void;
  description?: string;
  textCenter?: boolean;
};

export interface DropdownProps {
  labelText?: string;
  listName?: string;
  classNameRoot?: string;
  dropdownList: TDropdownListItem[];
  dropdownPosition?: ETooltipPosition;
}
