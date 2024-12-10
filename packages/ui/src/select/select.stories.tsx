import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "UI/Select",
  args: {
    placeholder: "Pick value",
    data: ["React", "Angular", "Vue", "Svelte"],
    defaultValue: "React",
    size: "md",
    disabled: false,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Label: Story = {
  args: {
    label: "Label",
  },
};
