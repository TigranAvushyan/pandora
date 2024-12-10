import { Tabs as MTabs } from "@mantine/core";
import clsx from "clsx";

import styles from "./tabs.module.css";

export const TabsConfig = MTabs.extend({
  classNames(_, { variant = "switch" }) {
    return {
      root: clsx(styles[variant], styles.root),
      list: styles.list,
      tab: styles.tab,
    };
  },
});
