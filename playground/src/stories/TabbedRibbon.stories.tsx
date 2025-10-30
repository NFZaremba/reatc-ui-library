import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { AnimatedTabs } from "../components/iwbi/TabbedRibbon";
import type { Tab } from "../hooks/UseTabs";

const meta: Meta<typeof AnimatedTabs> = {
  title: "IWBI/TabbedRibbon",
  component: AnimatedTabs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AnimatedTabs>;

const defaultTabs: Tab[] = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Contact", value: "contact" },
  { label: "Danger Zone", value: "danger-zone" },
];

export const Default: Story = {
  args: {
    tabs: defaultTabs,
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: [
      { label: "Home", value: "home" },
      { label: "About", value: "about" },
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { label: "Home", value: "home" },
      { label: "About", value: "about" },
      { label: "Contact", value: "contact" },
      { label: "Services", value: "services" },
      { label: "Portfolio", value: "portfolio" },
      { label: "Team", value: "team" },
      { label: "Danger Zone", value: "danger-zone" },
    ],
  },
};

export const WithoutDangerZone: Story = {
  args: {
    tabs: [
      { label: "Home", value: "home" },
      { label: "About", value: "about" },
      { label: "Contact", value: "contact" },
    ],
  },
};

export const CustomContent: Story = {
  render: () => {
    const customTabs: Tab[] = [
      { label: "Home", value: "home" },
      { label: "About", value: "about" },
      { label: "Contact", value: "contact" },
      { label: "Danger Zone", value: "danger-zone" },
    ];

    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Tabbed Navigation Demo</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Animated tabs with smooth transitions and hover effects
          </p>
          <AnimatedTabs tabs={customTabs} />
        </div>
      </div>
    );
  },
};

export const DarkMode: Story = {
  args: {
    tabs: defaultTabs,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div className="dark min-h-screen bg-zinc-950 p-8">
        <Story />
      </div>
    ),
  ],
};
