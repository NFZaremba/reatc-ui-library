import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";

const meta = {
  title: "UI/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithoutAvatar: Story = {
  render: (args) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover for details</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Quick Info</h4>
          <p className="text-sm text-muted-foreground">
            This is additional information that appears when you hover over the
            trigger.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  render: (args) => (
    <div className="space-x-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@shadcn</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@shadcn</h4>
              <p className="text-sm">
                Building @shadcn/ui. Previously @planetscale, @github, @linear.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined March 2022
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const ProductInfo: Story = {
  render: (args) => (
    <div className="p-4">
      <p className="text-sm">
        Check out our latest{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="p-0 h-auto font-normal">
              product release
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">New Product Features</h4>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  • Enhanced performance with 50% faster load times
                </p>
                <p className="text-sm text-muted-foreground">
                  • New dark mode support
                </p>
                <p className="text-sm text-muted-foreground">
                  • Improved accessibility features
                </p>
                <p className="text-sm text-muted-foreground">
                  • Mobile-first responsive design
                </p>
              </div>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Released January 2024
                </span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        for more information.
      </p>
    </div>
  ),
};
