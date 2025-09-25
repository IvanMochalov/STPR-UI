import { ApplyButtonsProps } from "../../ApplyButtons";
import { ModalProps } from "../../Modal";

export interface ConfirmProps extends ApplyButtonsProps, Omit<ModalProps, "footer"> {}
