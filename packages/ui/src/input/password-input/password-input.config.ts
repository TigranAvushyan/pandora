import { PasswordInput } from "@mantine/core";

import styles from "./password-input.module.css";

export const PasswordInputCongig = PasswordInput.extend({
  defaultProps: {
    size: "md",
  },
  classNames: () => ({
    wrapper: styles.inputWrapper,
    input: styles.input,
  }),
});
