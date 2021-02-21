import { TextType } from "../themes/theme";
import { TextColor } from "../components/Text";

export type ListItemDataType = "text" | "number" | "datetime" | "fraction";

export interface ListItemData {
  type: ListItemDataType;
  label?: string;
  text?: string;
  date?: Date;
  num?: number;
  numerator?: number;
  denominator?: number;
  dateTime?: Date;
  time?: Date;
  variant?: TextType;
  color?: TextColor;
}
