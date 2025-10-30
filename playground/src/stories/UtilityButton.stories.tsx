import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { UtilityButton } from "../components/iwbi/UtilityButton";

const meta: Meta<typeof UtilityButton> = {
  title: "IWBI/UtilityButton",
  component: UtilityButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "general-primary",
        "general-secondary",
        "general-tertiary",
        "tooltip-primary",
        "tooltip-secondary",
      ],
      description: "Button variant",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof UtilityButton>;

// General variants
export const GeneralPrimary: Story = {
  args: {
    variant: "general-primary",
    children: "Label",
  },
};

export const GeneralSecondary: Story = {
  args: {
    variant: "general-secondary",
    children: "Label",
  },
};

export const GeneralTertiary: Story = {
  args: {
    variant: "general-tertiary",
    children: "Label",
  },
};

// Tooltip variants
export const TooltipPrimary: Story = {
  args: {
    variant: "tooltip-primary",
    children: "Label",
  },
};

export const TooltipSecondary: Story = {
  args: {
    variant: "tooltip-secondary",
    children: "Label",
  },
};

// States
export const Disabled: Story = {
  args: {
    variant: "general-primary",
    children: "Label",
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    variant: "general-primary",
    children: "This is a longer label text",
  },
};

// All variants showcase
const AllVariantsDemo = () => {
  return (
    <div className="flex flex-col gap-12 p-8">
      <div className="flex flex-col gap-6">
        <h3 className="heading-small">General Buttons</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="body-small text-gray-600 mb-2">Primary</p>
            <UtilityButton variant="general-primary">Label</UtilityButton>
          </div>
          <div>
            <p className="body-small text-gray-600 mb-2">Secondary</p>
            <UtilityButton variant="general-secondary">Label</UtilityButton>
          </div>
          <div>
            <p className="body-small text-gray-600 mb-2">Tertiary</p>
            <UtilityButton variant="general-tertiary">Label</UtilityButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="heading-small">Tooltip Buttons</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="body-small text-gray-600 mb-2">Primary</p>
            <UtilityButton variant="tooltip-primary">Label</UtilityButton>
          </div>
          <div>
            <p className="body-small text-gray-600 mb-2">Secondary</p>
            <UtilityButton variant="tooltip-secondary">Label</UtilityButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="heading-small">States</h3>
        <div className="flex gap-4 flex-wrap">
          <UtilityButton variant="general-primary">Enabled</UtilityButton>
          <UtilityButton variant="general-primary" disabled>
            Disabled
          </UtilityButton>
        </div>
      </div>
    </div>
  );
};

export const AllVariants: Story = {
  render: () => <AllVariantsDemo />,
};

// Interactive demo
const InteractiveDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4 items-center">
      <UtilityButton
        variant="general-primary"
        onClick={() => setCount(count + 1)}
      >
        Click me ({count})
      </UtilityButton>
      <div className="flex gap-2">
        <UtilityButton
          variant="general-secondary"
          onClick={() => setCount(count + 1)}
        >
          +1
        </UtilityButton>
        <UtilityButton
          variant="general-tertiary"
          onClick={() => setCount(Math.max(0, count - 1))}
        >
          -1
        </UtilityButton>
        <UtilityButton variant="tooltip-primary" onClick={() => setCount(0)}>
          Reset
        </UtilityButton>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};

// With icons example
const WithIconsDemo = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <UtilityButton variant="general-primary">✓ Confirm</UtilityButton>
      <UtilityButton variant="general-secondary">✕ Cancel</UtilityButton>
      <UtilityButton variant="tooltip-primary">ℹ Info</UtilityButton>
    </div>
  );
};

export const WithIcons: Story = {
  render: () => <WithIconsDemo />,
};
