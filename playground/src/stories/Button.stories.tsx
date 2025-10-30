import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../components/iwbi/Button";

const meta: Meta<typeof Button> = {
  title: "IWBI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary-gradient", "primary-dark", "secondary-light", "tertiary-light"],
      description: "Button variant",
    },
    size: {
      control: "radio",
      options: ["xlarge", "large"],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Xlarge variants
export const XlargePrimaryGradient: Story = {
  args: {
    variant: "primary-gradient",
    size: "xlarge",
    children: "Call to action",
  },
};

export const XlargePrimaryDark: Story = {
  args: {
    variant: "primary-dark",
    size: "xlarge",
    children: "Call to action",
  },
};

export const XlargeSecondaryLight: Story = {
  args: {
    variant: "secondary-light",
    size: "xlarge",
    children: "Call to action",
  },
};

// Large variants
export const LargePrimaryGradient: Story = {
  args: {
    variant: "primary-gradient",
    size: "large",
    children: "Call to action",
  },
};

export const LargePrimaryDark: Story = {
  args: {
    variant: "primary-dark",
    size: "large",
    children: "Call to action",
  },
};

export const LargeSecondaryLight: Story = {
  args: {
    variant: "secondary-light",
    size: "large",
    children: "Call to action",
  },
};

export const LargeTertiaryLight: Story = {
  args: {
    variant: "tertiary-light",
    size: "large",
    children: "Call to action",
  },
};

// States
export const Disabled: Story = {
  args: {
    variant: "primary-dark",
    size: "large",
    children: "Call to action",
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    variant: "primary-gradient",
    size: "large",
    children: "This is a longer call to action button",
  },
};

// All variants showcase
const AllVariantsDemo = () => {
  return (
    <div className="flex flex-col gap-12 p-8">
      <div className="flex flex-col gap-6">
        <h3 className="heading-small">Xlarge Buttons</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="body-small text-gray-600 mb-2">Primary Gradient</p>
            <Button variant="primary-gradient" size="xlarge">
              Call to action
            </Button>
          </div>
          <div>
            <p className="body-small text-gray-600 mb-2">Primary Dark</p>
            <Button variant="primary-dark" size="xlarge">
              Call to action
            </Button>
          </div>
          <div>
            <p className="body-small text-gray-600 mb-2">Secondary Light</p>
            <Button variant="secondary-light" size="xlarge">
              Call to action
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="heading-small">Large Buttons</h3>
        <div className="flex flex-col gap-4">
          <div>
            <p className="body-small text-gray-600 mb-2">Primary Gradient</p>
            <Button variant="primary-gradient" size="large">
              Call to action
            </Button>
          </div>
          <div>
            <p className="body-small text-gray-600 mb-2">Primary Dark</p>
            <Button variant="primary-dark" size="large">
              Call to action
            </Button>
          </div>
          <div>
            <p className="body-small text-gray-600 mb-2">Secondary Light</p>
            <Button variant="secondary-light" size="large">
              Call to action
            </Button>
          </div>
          <div>
            <p className="body-small text-gray-600 mb-2">Tertiary Light</p>
            <Button variant="tertiary-light" size="large">
              Call to action
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="heading-small">States</h3>
        <div className="flex gap-4">
          <Button variant="primary-dark" size="large">
            Enabled
          </Button>
          <Button variant="primary-dark" size="large" disabled>
            Disabled
          </Button>
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
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col gap-4 items-center">
      <Button
        variant="primary-gradient"
        size="large"
        onClick={() => setClicked(!clicked)}
      >
        {clicked ? "Clicked!" : "Click me"}
      </Button>
      {clicked && (
        <p className="body-small text-gray-600">Button was clicked!</p>
      )}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};
