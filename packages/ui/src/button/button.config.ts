import { Button } from "@mantine/core";
import clsx from "clsx";

import styles from "./button.module.css";

export const ButtonConfig = Button.extend({
  defaultProps: {
    size: "md",
  },
  classNames(_, { variant }) {
    return {
      root: clsx(styles[variant || "primary"], styles.root, styles.button),
    };
  },
});
