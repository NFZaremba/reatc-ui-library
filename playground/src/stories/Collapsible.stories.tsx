import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";

const meta = {
  title: "UI/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const WithCustomTrigger: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-2 hover:bg-muted rounded-md">
          <h4 className="text-sm font-semibold">
            Can I use this in my project?
          </h4>
          <ChevronsUpDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pb-4 pt-0">
          <p className="text-sm text-muted-foreground">
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </p>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const FAQ: Story = {
  render: (args) => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (item: string) => {
      setOpenItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    };

    return (
      <div className="w-[400px] space-y-4">
        <Collapsible
          open={openItems.includes("item1")}
          onOpenChange={() => toggleItem("item1")}
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-2 hover:bg-muted rounded-md">
            <h4 className="text-sm font-semibold">Is it accessible?</h4>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4 pt-0">
            <p className="text-sm text-muted-foreground">
              Yes. It adheres to the WAI-ARIA design pattern.
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={openItems.includes("item2")}
          onOpenChange={() => toggleItem("item2")}
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-2 hover:bg-muted rounded-md">
            <h4 className="text-sm font-semibold">Is it styled?</h4>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4 pt-0">
            <p className="text-sm text-muted-foreground">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={openItems.includes("item3")}
          onOpenChange={() => toggleItem("item3")}
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-2 hover:bg-muted rounded-md">
            <h4 className="text-sm font-semibold">Is it animated?</h4>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4 pt-0">
            <p className="text-sm text-muted-foreground">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};
