import { DateInput as MDateInput } from "@mantine/dates";

import inputStyles from "../base-input/input.module.css";

export const DateInputConfig = MDateInput.extend({
  defaultProps: {
    size: "md",
  },
  classNames: {
    input: inputStyles.input,
  },
});
