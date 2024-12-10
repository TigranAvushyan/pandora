import { Card } from "@mantine/core";

import styles from "./card.module.css";

export const CardConfig = Card.extend({
  classNames() {
    return {
      root: styles.root,
    };
  },
});
