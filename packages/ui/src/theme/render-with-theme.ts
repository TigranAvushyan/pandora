import { RenderOptions, render } from "@testing-library/react";

import { ThemeProvider } from "@pandora/ui";

export const renderWithTheme = (
  ui: React.ReactElement,
  options?: RenderOptions,
): ReturnType<typeof render> =>
  render(ui, { wrapper: ThemeProvider, ...options });
