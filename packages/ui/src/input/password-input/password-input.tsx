import {
  PasswordInput as MPasswordInput,
  PasswordInputProps as MPasswordInputProps,
} from "@mantine/core";
import { forwardRef } from "react";

import { WarningCircle } from "../../assets/icons";

export type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  MPasswordInputProps;

interface PasswordInputComponent
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<PasswordInputProps> &
      React.RefAttributes<HTMLInputElement>
  > {
  Wrapper: typeof MPasswordInput.Wrapper;
  Label: typeof MPasswordInput.Label;
  Description: typeof MPasswordInput.Description;
  Error: typeof MPasswordInput.Error;
  Placeholder: typeof MPasswordInput.Placeholder;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => (
    <MPasswordInput
      ref={ref}
      {...props}
      rightSection={
        props.error && !props.rightSection ? (
          <WarningCircle color="var(--error-500)" />
        ) : (
          props.rightSection
        )
      }
    />
  ),
) as PasswordInputComponent;

PasswordInput.Wrapper = MPasswordInput.Wrapper;
PasswordInput.Label = MPasswordInput.Label;
PasswordInput.Description = MPasswordInput.Description;
PasswordInput.Error = MPasswordInput.Error;
PasswordInput.Placeholder = MPasswordInput.Placeholder;
