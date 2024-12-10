import { Meta, StoryObj } from "@storybook/react";

import { DateInput } from "./date-input";

const meta: Meta<typeof DateInput> = {
  title: "UI/Date/Input",
  component: DateInput,
  args: {
    disabled: false,
    placeholder: "Date Input",
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};
