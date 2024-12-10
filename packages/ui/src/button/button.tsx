import { Button as MButton, ButtonProps as MButtonProps } from "@mantine/core";
import { forwardRef } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <MButton ref={ref} {...props} />,
);
