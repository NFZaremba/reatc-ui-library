import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlertCircle, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert className="max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: (args) => (
    <Alert className="max-w-md">
      <AlertTitle>Important Information</AlertTitle>
      <AlertDescription>
        This is an alert without an icon. The content will automatically adjust.
      </AlertDescription>
    </Alert>
  ),
};
