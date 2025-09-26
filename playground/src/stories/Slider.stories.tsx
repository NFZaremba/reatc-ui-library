import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider } from "../components/ui/slider";

const meta = {
  title: "UI/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "object" },
    },
    max: {
      control: { type: "number" },
    },
    min: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[60%]",
  },
};

export const WithRange: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: "w-[60%]",
  },
};

export const WithStep: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
    className: "w-[60%]",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: "w-[60%]",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-full max-w-md space-y-3">
      <div className="flex justify-between text-sm">
        <span>Volume</span>
        <span>50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const PriceRange: Story = {
  render: (args) => (
    <div className="w-full max-w-md space-y-3">
      <div className="flex justify-between text-sm">
        <span>Price Range</span>
        <span>$250 - $750</span>
      </div>
      <Slider defaultValue={[250, 750]} max={1000} min={0} step={25} />
    </div>
  ),
};

export const Temperature: Story = {
  render: (args) => (
    <div className="w-full max-w-md space-y-3">
      <div className="flex justify-between text-sm">
        <span>Temperature</span>
        <span>22°C</span>
      </div>
      <Slider defaultValue={[22]} max={30} min={10} step={1} />
    </div>
  ),
};
