import type { Meta, StoryObj } from "@storybook/react";

import { RepeatInput } from "./repeat-input";

const meta: Meta<typeof RepeatInput> = {
  component: RepeatInput,
  title: "UI/RepeatInput",
  args: {
    disabled: false,
    placeholder: "RepeatInput",
  },
  argTypes: {
    parentValue: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RepeatInput>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
    value: "RepeatInput",
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
