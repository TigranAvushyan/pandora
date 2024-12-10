import { Tabs as MTabs, TabsProps as MTabsProps } from "@mantine/core";

export type TabsProps = MTabsProps;

export const Tabs = (props: TabsProps) => <MTabs {...props} />;

Tabs.List = MTabs.List;
Tabs.Tab = MTabs.Tab;
Tabs.Panel = MTabs.Panel;
