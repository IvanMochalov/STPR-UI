import { LabelProps } from "../../Label";
import { TextProps } from "../../Text";

export interface TextWithLabelProps extends TextProps, Omit<LabelProps, "classNameRoot"> {
  classNameLabelRoot?: string;
  classNameWrapperRoot?: string;
}
