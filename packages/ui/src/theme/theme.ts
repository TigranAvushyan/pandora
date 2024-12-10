import { MantineThemeOverride, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { ButtonConfig } from "../button";
import { CardConfig } from "../card";
import { CheckboxConfig } from "../checkbox";
import { InputConfig } from "../input/base-input";
import { DateInputConfig } from "../input/date-input";
import { SelectConfig } from "../select";
import { TabsConfig } from "../tabs";
import "./index.css";
import "./variables.css";

export const theme: MantineThemeOverride = createTheme({
  fontFamily: "MyriadPro",
  radius: {
    sm: "var(--border-radius-sm)",
    md: "var(--border-radius-md)",
    full: "var(--border-radius-full)",
  },
  fontSizes: {
    xs: "var(--font-size-xs)",
    sm: "var(--font-size-sm)",
    md: "var(--font-size-md)",
    lg: "var(--font-size-lg)",
    xl: "var(--font-size-xl)",
  },
  spacing: {
    xs: "var(--spacing-xs)",
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    lg: "var(--spacing-lg)",
    xl: "var(--spacing-xl)",
  },
  components: {
    Input: InputConfig,
    Button: ButtonConfig,
    Checkbox: CheckboxConfig,
    Tabs: TabsConfig,
    DateInput: DateInputConfig,
    Select: SelectConfig,
    Card: CardConfig,
  },
});
