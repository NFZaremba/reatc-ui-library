import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Navigation, type NavItem } from "../components/iwbi/Navigation";

const meta: Meta<typeof Navigation> = {
  title: "IWBI/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const defaultNavItems: NavItem[] = [
  { label: "WELL", active: false },
  { label: "Pursuits", active: false },
  { label: "Network", active: false },
  { label: "Knowledge", active: false },
  { label: "IWBI", active: false },
];

export const Default: Story = {
  args: {
    navItems: defaultNavItems,
    isStrategy: false,
  },
  render: (args) => (
    <div className="h-screen bg-gray-100">
      <Navigation {...args} />
      <div className="container-lg pt-24">
        <h1 className="heading-large">Navigation Demo</h1>
        <p className="body-base mt-4">
          Hover over the navigation items to see the dropdown menus.
        </p>
      </div>
    </div>
  ),
};

export const StrategyView: Story = {
  args: {
    navItems: defaultNavItems,
    isStrategy: true,
  },
  render: (args) => (
    <div className="h-screen bg-white">
      <Navigation {...args} />
      <div className="container-lg pt-24">
        <h1 className="heading-large text-gray-800">Strategy View</h1>
        <p className="body-base mt-4 text-gray-600">
          This is the navigation in strategy mode with Queue button and close
          icon.
        </p>
      </div>
    </div>
  ),
};

export const WithCustomNavItems: Story = {
  args: {
    navItems: [
      { label: "Home", active: false },
      { label: "About", active: false },
      { label: "Services", active: true },
    ],
    isStrategy: false,
  },
  render: (args) => (
    <div className="h-screen bg-gray-100">
      <Navigation {...args} />
      <div className="container-lg pt-24">
        <h1 className="heading-large">Custom Nav Items</h1>
        <p className="body-base mt-4">Navigation with custom menu items.</p>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    navItems: defaultNavItems,
    isStrategy: false,
  },
  render: (args) => {
    const [isStrategy, setIsStrategy] = React.useState(false);

    return (
      <div className="h-screen bg-gray-100">
        <Navigation {...args} isStrategy={isStrategy} />
        <div className="container-lg pt-24">
          <h1 className="heading-large">Interactive Demo</h1>
          <p className="body-base mt-4 mb-6">
            Toggle between normal and strategy views.
          </p>
          <button
            onClick={() => setIsStrategy(!isStrategy)}
            className="btn bg-white border border-gray-200 hover:border-cyan-300"
          >
            <span className="body-small font-semibold">
              {isStrategy ? "Switch to Normal View" : "Switch to Strategy View"}
            </span>
          </button>
        </div>
      </div>
    );
  },
};
