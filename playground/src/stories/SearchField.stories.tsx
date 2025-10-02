import type { Meta, StoryObj } from "@storybook/react-vite";

const FRAMEWORKS = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "wordpress",
    label: "WordPress",
  },
  {
    value: "express.js",
    label: "Express.js",
  },
  {
    value: "nest.js",
    label: "Nest.js",
  },
];

import { SearchField } from "@/components/iwbi/search";

const meta = {
  title: "IWBI/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: { type: "object" },
    },
    emptyMessage: {
      control: { type: "string" },
    },
    placeholder: {
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: FRAMEWORKS,
    emptyMessage: "No options found",
    placeholder: "Search for an option",
  },
  render: (args) => <SearchField {...args} />,
};
