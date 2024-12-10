import { Select as MSelect, SelectProps as MSelectProps } from "@mantine/core";
import { FC } from "react";

export type SelectProps = MSelectProps;

export const Select: FC<SelectProps> = (props) => <MSelect {...props} />;
