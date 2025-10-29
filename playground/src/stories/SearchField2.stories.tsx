import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchField2 } from "@/components/iwbi/SearchField2";

const meta = {
  title: "IWBI/SearchField2",
  component: SearchField2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: { type: "object" },
    },
    emptyMessage: {
      control: { type: "object" },
    },
    placeholder: {
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof SearchField2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SearchField2 {...args} />,
};
