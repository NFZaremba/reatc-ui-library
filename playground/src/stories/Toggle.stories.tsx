import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Italic, Underline } from "lucide-react";

import { Toggle } from "../components/ui/toggle";

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
    },
    pressed: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Toggle",
  },
};

export const WithIcon: Story = {
  args: {
    children: <Bold className="h-4 w-4" />,
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: <Bold className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Toggle",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: <Bold className="h-4 w-4" />,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: <Bold className="h-4 w-4" />,
  },
};

export const TextFormatting: Story = {
  render: (args) => (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const OutlineGroup: Story = {
  render: (args) => (
    <div className="flex items-center gap-1">
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};
