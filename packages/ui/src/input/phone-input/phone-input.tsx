import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import PhoneNumberInput from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
import ru from "react-phone-number-input/locale/ru";
import "react-phone-number-input/style.css";

import styles from "./phone-input.module.css";

export interface PhoneInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  isError?: boolean;
  onChange: (value: string | undefined) => void;
}

export const PhoneInput: FC<PhoneInputProps> = ({
  required,
  isError,
  value,
  className,
  ...props
}) => {
  const { i18n } = useTranslation();
  return (
    <div className={styles.inputContainer}>
      <PhoneNumberInput
        labels={i18n.language === "ru" ? ru : en}
        initialValueFormat="national"
        defaultCountry="RU"
        value={value?.toString()}
        {...props}
        className={clsx(
          isError && styles.errorInput,
          required && styles.requiredInput,
          styles.input,
          className,
        )}
      />
    </div>
  );
};
