import { Checkbox as MCheckbox } from "@mantine/core";
import { ComponentProps, FC } from "react";

export type CheckboxProps = ComponentProps<typeof MCheckbox>;
export const Checkbox: FC<CheckboxProps> = (props) => {
  return <MCheckbox {...props} />;
};
