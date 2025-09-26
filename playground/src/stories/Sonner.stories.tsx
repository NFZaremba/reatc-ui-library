import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";

import { Button } from "../components/ui/button";
import { Toaster } from "../components/ui/sonner";

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const Simple: Story = {
  render: (args) => (
    <Button variant="outline" onClick={() => toast("Event has been created")}>
      Simple Toast
    </Button>
  ),
};

export const WithDescription: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })
      }
    >
      With Description
    </Button>
  ),
};

export const Success: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() => toast.success("Event has been created")}
    >
      Success Toast
    </Button>
  ),
};

export const Error: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() => toast.error("Event has not been created")}
    >
      Error Toast
    </Button>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() => toast.warning("Event has not been created")}
    >
      Warning Toast
    </Button>
  ),
};

export const Info: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() =>
        toast.info("Be at the area 10 minutes before the event time")
      }
    >
      Info Toast
    </Button>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          action: {
            label: "Undo",
            onClick: () => toast("Event deleted"),
          },
        })
      }
    >
      With Action
    </Button>
  ),
};

export const Promise: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() => {
        const promise = () =>
          new Promise((resolve) => setTimeout(resolve, 2000));

        toast.promise(promise, {
          loading: "Loading...",
          success: (data) => {
            return "Event has been created";
          },
          error: "Error",
        });
      }}
    >
      Promise Toast
    </Button>
  ),
};

export const Custom: Story = {
  render: (args) => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
          cancel: {
            label: "Cancel",
            onClick: () => console.log("Cancel"),
          },
        })
      }
    >
      Custom Toast
    </Button>
  ),
};
