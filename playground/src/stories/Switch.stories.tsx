import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";

const meta = {
  title: "UI/Switch",
  component: Switch,
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
} satisfies Meta<typeof Switch>;

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
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const FormExample: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications" className="text-sm font-medium">
          Email Notifications
        </Label>
        <Switch id="notifications" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="marketing" className="text-sm font-medium">
          Marketing Emails
        </Label>
        <Switch id="marketing" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="social" className="text-sm font-medium">
          Social Notifications
        </Label>
        <Switch id="social" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="security" className="text-sm font-medium">
          Security Alerts
        </Label>
        <Switch id="security" defaultChecked disabled />
      </div>
    </div>
  ),
};
