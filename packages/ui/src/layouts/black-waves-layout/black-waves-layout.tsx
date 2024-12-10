import clsx from "clsx";
import { HTMLAttributes } from "react";

import styles from "./black-waves-layout.module.css";

export const BlackWavesLayout: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.blackWavesLayout, className)} {...props} />
  );
};
