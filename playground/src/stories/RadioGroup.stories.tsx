import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: (args) => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabled: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" disabled />
        <Label htmlFor="option-two">Option Two (disabled)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const FormExample: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium">Notification method</Label>
        <RadioGroup defaultValue="email">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sms" id="sms" />
            <Label htmlFor="sms">SMS</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="push" id="push" />
            <Label htmlFor="push">Push notification</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="none" />
            <Label htmlFor="none">None</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

export const PaymentMethod: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Label className="text-base font-medium">Payment Method</Label>
      <RadioGroup defaultValue="card">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card" className="flex items-center space-x-2">
            <span>Credit Card</span>
            <span className="text-sm text-muted-foreground">
              Visa, Mastercard, American Express
            </span>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label htmlFor="paypal" className="flex items-center space-x-2">
            <span>PayPal</span>
            <span className="text-sm text-muted-foreground">
              Pay with your PayPal account
            </span>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="apple" id="apple" />
          <Label htmlFor="apple" className="flex items-center space-x-2">
            <span>Apple Pay</span>
            <span className="text-sm text-muted-foreground">
              Touch ID or Face ID
            </span>
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
};
