import { screen } from "@testing-library/react";

import { renderWithTheme as render } from "@pandora/ui";

import { Button } from "./button";

describe("Button", () => {
  it("should render", () => {
    render(<Button>Button Test</Button>);
    screen.getByText("Button Test");
  });

  it("should be call an callback on click", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Button Test</Button>);
    screen.getByText("Button Test").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    render(<Button disabled>Button Test</Button>);
    screen.getByText("Button Test").classList.contains("disabled");
  });

  it("should be loading", () => {
    render(<Button loading>Button Test</Button>);
    screen.getByText("Button Test").classList.contains("loading");
  });
});
