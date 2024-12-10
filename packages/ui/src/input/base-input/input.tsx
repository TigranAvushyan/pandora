import { Input as MInput, InputProps as MInputProps } from "@mantine/core";
import { forwardRef } from "react";

import { WarningCircle } from "../../assets/icons";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  MInputProps;

interface InputComponent
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<InputProps> & React.RefAttributes<HTMLInputElement>
  > {
  Wrapper: typeof MInput.Wrapper;
  Label: typeof MInput.Label;
  Description: typeof MInput.Description;
  Error: typeof MInput.Error;
  Placeholder: typeof MInput.Placeholder;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <MInput
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
)) as InputComponent;

Input.Wrapper = MInput.Wrapper;
Input.Label = MInput.Label;
Input.Description = MInput.Description;
Input.Error = MInput.Error;
Input.Placeholder = MInput.Placeholder;
