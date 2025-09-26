import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Your label",
  },
};

export const WithInput: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Required: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">
        Password <span className="text-red-500">*</span>
      </Label>
      <Input type="password" id="password" placeholder="Password" />
    </div>
  ),
};

export const FormField: Story = {
  render: (args) => (
    <div className="space-y-4 max-w-sm">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          placeholder="Type your message here..."
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  ),
};
