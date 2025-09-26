import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "../components/ui/skeleton";

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Skeleton className="h-4 w-[250px]" />,
};

export const Circle: Story = {
  render: (args) => <Skeleton className="h-12 w-12 rounded-full" />,
};

export const Card: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const Article: Story = {
  render: (args) => (
    <div className="space-y-3 max-w-md">
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
    </div>
  ),
};

export const List: Story = {
  render: (args) => (
    <div className="space-y-4 max-w-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Table: Story = {
  render: (args) => (
    <div className="space-y-2 max-w-lg">
      <div className="grid grid-cols-4 gap-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
        </div>
      ))}
    </div>
  ),
};
