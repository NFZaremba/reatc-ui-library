import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IconButton } from "../components/iwbi/IconButton";
import { UtilityReset } from "../components/icons/UtilityReset";
import { X } from "../components/icons/X";
import { UtilityChevronDown } from "../components/icons/UtilityChevronDown";
import { NavAccount } from "../components/icons/NavAccount";

const meta: Meta<typeof IconButton> = {
  title: "IWBI/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "light", "semitransparent"],
      description: "Button variant",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// Default variant
export const Default: Story = {
  args: {
    variant: "default",
    icon: <UtilityReset />,
    label: "Default button",
  },
};

// Reset button
export const Reset: Story = {
  args: {
    variant: "light",
    icon: <UtilityReset />,
    label: "Reset",
  },
};

// Close buttons
export const CloseRegular: Story = {
  args: {
    variant: "light",
    icon: <X color="#71747D" className="size-2.5" />,
    label: "Close",
  },
};

export const CloseSemitransparent: Story = {
  args: {
    variant: "semitransparent",
    icon: <X color="#71747D" className="size-2.5" />,
    label: "Close",
  },
};

// Expand/Contract buttons (using chevron rotated)
export const Contract: Story = {
  args: {
    variant: "light",
    label: "Contract",
  },
  render: (args) => (
    <IconButton {...args}>
      <div className="rotate-180">
        <UtilityChevronDown />
      </div>
    </IconButton>
  ),
};

export const Expand: Story = {
  args: {
    variant: "light",
    label: "Expand",
  },
  render: (args) => (
    <IconButton {...args}>
      <UtilityChevronDown />
    </IconButton>
  ),
};

// Account buttons
export const AccountLight: Story = {
  args: {
    variant: "light",
    label: "Account",
  },
  render: (args) => (
    <IconButton {...args}>
      <NavAccount className="size-5 text-bronze-500" />
    </IconButton>
  ),
};

export const AccountSemitransparent: Story = {
  args: {
    variant: "semitransparent",
    label: "Account",
  },
  render: (args) => (
    <IconButton {...args}>
      <NavAccount className="size-5 text-bronze-100" />
    </IconButton>
  ),
};

// States
export const Disabled: Story = {
  args: {
    variant: "light",
    icon: <UtilityReset />,
    label: "Reset",
    disabled: true,
  },
};

// All variants showcase
const AllVariantsDemo = () => {
  return (
    <div className="flex flex-col gap-12 p-8">
      <div className="flex flex-col gap-6">
        <h3 className="heading-small">Icon Buttons</h3>

        <div className="flex flex-col gap-4">
          <div>
            <p className="body-small text-gray-600 mb-2">
              Default (white background, no border)
            </p>
            <IconButton
              variant="default"
              icon={<UtilityReset />}
              label="Default"
            />
          </div>

          <div>
            <p className="body-small text-gray-600 mb-2">Reset</p>
            <IconButton variant="light" icon={<UtilityReset />} label="Reset" />
          </div>

          <div>
            <p className="body-small text-gray-600 mb-2">Close</p>
            <div className="flex gap-4">
              <IconButton
                variant="light"
                icon={<X color="#71747D" className="size-2.5" />}
                label="Close"
              />
              <IconButton
                variant="semitransparent"
                icon={<X color="#71747D" className="size-2.5" />}
                label="Close"
              />
            </div>
          </div>

          <div>
            <p className="body-small text-gray-600 mb-2">Contract</p>
            <IconButton variant="light" label="Contract">
              <div className="rotate-180">
                <UtilityChevronDown />
              </div>
            </IconButton>
          </div>

          <div>
            <p className="body-small text-gray-600 mb-2">Expand</p>
            <IconButton variant="light" label="Expand">
              <UtilityChevronDown />
            </IconButton>
          </div>

          <div>
            <p className="body-small text-gray-600 mb-2">Account, light</p>
            <IconButton variant="light" label="Account">
              <NavAccount className="size-5 text-bronze-500" />
            </IconButton>
          </div>

          <div>
            <p className="body-small text-gray-600 mb-2">
              Account, semitransparent
            </p>
            <IconButton variant="semitransparent" label="Account">
              <NavAccount className="size-5 text-bronze-100" />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="heading-small">States</h3>
        <div className="flex gap-4">
          <IconButton variant="light" icon={<UtilityReset />} label="Enabled" />
          <IconButton
            variant="light"
            icon={<UtilityReset />}
            label="Disabled"
            disabled
          />
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-6 items-center p-4">
      <div className="flex flex-col gap-2 items-center">
        <p className="body-small text-gray-600">Expand/Contract Toggle</p>
        <IconButton
          variant="light"
          label={isExpanded ? "Contract" : "Expand"}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className={isExpanded ? "rotate-180" : ""}>
            <UtilityChevronDown />
          </div>
        </IconButton>
        {isExpanded && (
          <p className="body-small text-gray-600 mt-2">Content is expanded!</p>
        )}
      </div>

      <div className="flex flex-col gap-2 items-center">
        <p className="body-small text-gray-600">Counter: {count}</p>
        <div className="flex gap-2">
          <IconButton
            variant="light"
            icon={<UtilityReset />}
            label="Reset counter"
            onClick={() => setCount(0)}
          />
          <IconButton
            variant="semitransparent"
            icon={<X color="#71747D" className="size-2.5" />}
            label="Decrease"
            onClick={() => setCount(Math.max(0, count - 1))}
          />
        </div>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};
