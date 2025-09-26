import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../components/ui/command";
import { Button } from "../components/ui/button";

const meta = {
  title: "UI/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md max-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Dialog: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <p className="text-sm text-muted-foreground mb-4">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Command Dialog
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

export const Search: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md max-w-[450px]">
      <CommandInput placeholder="Search frameworks..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup heading="Frameworks">
          <CommandItem value="next">Next.js</CommandItem>
          <CommandItem value="react">React</CommandItem>
          <CommandItem value="vue">Vue.js</CommandItem>
          <CommandItem value="angular">Angular</CommandItem>
          <CommandItem value="svelte">Svelte</CommandItem>
          <CommandItem value="nuxt">Nuxt.js</CommandItem>
          <CommandItem value="gatsby">Gatsby</CommandItem>
          <CommandItem value="remix">Remix</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithShortcuts: Story = {
  render: (args) => (
    <Command className="rounded-lg border shadow-md max-w-[450px]">
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Open File</span>
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Save</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Save As</span>
            <CommandShortcut>⌘⇧S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Edit">
          <CommandItem>
            <span>Undo</span>
            <CommandShortcut>⌘Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Redo</span>
            <CommandShortcut>⌘⇧Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Cut</span>
            <CommandShortcut>⌘X</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Copy</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Paste</span>
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
