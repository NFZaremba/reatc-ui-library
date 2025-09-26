import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const FormExample: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">Receive marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="updates" disabled />
        <Label htmlFor="updates">Product updates (coming soon)</Label>
      </div>
    </div>
  ),
};
