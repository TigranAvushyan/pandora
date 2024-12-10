import { Select } from "@mantine/core";

import styles from "./select.module.css";

export const SelectConfig = Select.extend({
  defaultProps: {
    withCheckIcon: false,
    size: "md",
    searchable: true,
  },
  classNames: () => ({
    dropdown: styles.dropdown,
  }),
});
