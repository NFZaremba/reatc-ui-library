import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ViewControl, ViewControlItem } from "@/components/iwbi/ViewControl";
import { UtilityAccordion } from "@/components/icons/UtilityAccordion";
import { UtilityText } from "@/components/icons/UtilityText";

const meta: Meta<typeof ViewControl> = {
  title: "IWBI/ViewControl",
  component: ViewControl,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("list");

    return (
      <ViewControl value={value} onValueChange={setValue}>
        <ViewControlItem value="list">
          <UtilityAccordion />
        </ViewControlItem>
        <ViewControlItem value="text">
          <UtilityText />
        </ViewControlItem>
      </ViewControl>
    );
  },
};

export const TextViewActive: Story = {
  render: () => {
    const [value, setValue] = useState("text");

    return (
      <ViewControl value={value} onValueChange={setValue}>
        <ViewControlItem value="list">
          <UtilityAccordion />
        </ViewControlItem>
        <ViewControlItem value="text">
          <UtilityText />
        </ViewControlItem>
      </ViewControl>
    );
  },
};

export const Outline: Story = {
  render: () => {
    const [value, setValue] = useState("list");

    return (
      <ViewControl value={value} onValueChange={setValue} variant="outline">
        <ViewControlItem value="list">
          <UtilityAccordion />
        </ViewControlItem>
        <ViewControlItem value="text">
          <UtilityText />
        </ViewControlItem>
      </ViewControl>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("list");

    return (
      <ViewControl value={value} onValueChange={setValue}>
        <ViewControlItem value="list">
          <UtilityAccordion />
        </ViewControlItem>
        <ViewControlItem value="text" disabled>
          <UtilityText />
        </ViewControlItem>
      </ViewControl>
    );
  },
};

