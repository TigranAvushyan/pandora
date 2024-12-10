import { Input } from "@mantine/core";

import styles from "./input.module.css";

export const InputConfig = Input.extend({
  defaultProps: {
    size: "md",
  },
  classNames: () => ({
    wrapper: styles.inputWrapper,
    input: styles.input,
  }),
});
