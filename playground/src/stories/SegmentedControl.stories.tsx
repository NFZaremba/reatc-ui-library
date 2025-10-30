import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/iwbi/SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "IWBI/SegmentedControl",
  component: SegmentedControl,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("daily");

    return (
      <SegmentedControl value={value} onValueChange={setValue}>
        <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
        <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
        <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};

export const Outline: Story = {
  render: () => {
    const [value, setValue] = useState("overview");

    return (
      <SegmentedControl
        value={value}
        onValueChange={setValue}
        variant="outline"
      >
        <SegmentedControlItem value="overview">Overview</SegmentedControlItem>
        <SegmentedControlItem value="analytics">Analytics</SegmentedControlItem>
        <SegmentedControlItem value="reports">Reports</SegmentedControlItem>
        <SegmentedControlItem value="settings">Settings</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};

export const TwoOptions: Story = {
  render: () => {
    const [value, setValue] = useState("grid");

    return (
      <SegmentedControl value={value} onValueChange={setValue}>
        <SegmentedControlItem value="grid">Grid View</SegmentedControlItem>
        <SegmentedControlItem value="list">List View</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};

export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState("1m");

    return (
      <SegmentedControl value={value} onValueChange={setValue}>
        <SegmentedControlItem value="1d">1D</SegmentedControlItem>
        <SegmentedControlItem value="1w">1W</SegmentedControlItem>
        <SegmentedControlItem value="1m">1M</SegmentedControlItem>
        <SegmentedControlItem value="3m">3M</SegmentedControlItem>
        <SegmentedControlItem value="6m">6M</SegmentedControlItem>
        <SegmentedControlItem value="1y">1Y</SegmentedControlItem>
        <SegmentedControlItem value="all">All</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("enabled");

    return (
      <SegmentedControl value={value} onValueChange={setValue}>
        <SegmentedControlItem value="enabled">Enabled</SegmentedControlItem>
        <SegmentedControlItem value="disabled" disabled>
          Disabled
        </SegmentedControlItem>
        <SegmentedControlItem value="another">Another</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};
