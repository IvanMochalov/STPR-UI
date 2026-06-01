import { ApplyButtonsProps } from "../../ApplyButtons";
import { ModalProps } from "../../Modal";

export interface ConfirmProps
  extends Omit<ApplyButtonsProps, "classNameRoot">,
    Omit<ModalProps, "footer" | "children" | "style"> {
  classNameApplyButtonsRoot?: string;
  disabledConfirm?: boolean;
  loadingConfirm?: boolean;
}
