import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/en";
import "dayjs/locale/ru";

import { theme } from "./theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      <DatesProvider
        settings={{
          locale: "ru",
          firstDayOfWeek: 0,
          weekendDays: [0],
          timezone: "UTC",
        }}
      >
        {children}
      </DatesProvider>
    </MantineProvider>
  );
};
