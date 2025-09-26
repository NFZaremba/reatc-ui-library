import type { Meta, StoryObj } from "@storybook/react-vite";

import { AspectRatio } from "../components/ui/aspect-ratio";

const meta = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.1, max: 5, step: 0.1 },
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Square: Story = {
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio ratio={1 / 1}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
};

export const Video: Story = {
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=800&dpr=2&q=80"
          alt="Photo by Lee Campbell"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio ratio={3 / 4}>
        <img
          src="https://images.unsplash.com/photo-1576075796033-848c2a5a3e46?w=800&dpr=2&q=80"
          alt="Photo by Alvaro Pinot"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
};

export const WithContent: Story = {
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <div className="flex h-full items-center justify-center p-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">16:9 Aspect Ratio</h3>
            <p className="text-sm text-muted-foreground">
              This container maintains a 16:9 aspect ratio
            </p>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
};
