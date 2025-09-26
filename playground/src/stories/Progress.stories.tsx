import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";

import { Progress } from "../components/ui/progress";

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
    className: "w-[60%]",
  },
};

export const Zero: Story = {
  args: {
    value: 0,
    className: "w-[60%]",
  },
};

export const Half: Story = {
  args: {
    value: 50,
    className: "w-[60%]",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[60%]",
  },
};

export const Animated: Story = {
  render: (args) => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-[60%]" />;
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <span className="text-sm">Small</span>
        <Progress value={60} className="h-2" />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Default</span>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Large</span>
        <Progress value={60} className="h-6" />
      </div>
    </div>
  ),
};
