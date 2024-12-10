import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "UI/Tabs",
  args: {
    variant: "switch",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "outline", "pills", "switch"],
    },
  },
  render: (args) => (
    <Tabs defaultValue={"tab-1"} {...args}>
      <Tabs.List>
        <Tabs.Tab value="tab-1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="tab-2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="tab-3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab-1">Panel 1</Tabs.Panel>
      <Tabs.Panel value="tab-2">Panel 2</Tabs.Panel>
      <Tabs.Panel value="tab-3">Panel 3</Tabs.Panel>
    </Tabs>
  ),
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Switch: Story = {};
