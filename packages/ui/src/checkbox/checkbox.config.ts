import { Checkbox } from "@mantine/core";
import clsx from "clsx";

import styles from "./checkbox.module.css";

export const CheckboxConfig = Checkbox.extend({
  classNames() {
    return {
      input: clsx(styles.input, styles.checkbox),
      label: styles.label,
    };
  },
});
