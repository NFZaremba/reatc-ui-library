import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["single", "multiple"],
    },
    collapsible: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: (args) => (
    <Accordion {...args} type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: (args) => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. With type="multiple", you can have multiple items open at the
          same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What about accessibility?</AccordionTrigger>
        <AccordionContent>
          It follows WAI-ARIA guidelines and supports keyboard navigation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Absolutely! You can customize the styling and behavior as needed.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// export const DefaultOpen: Story = {
//   render: (args) => (
//     <Accordion type="single" defaultValue="item-2" className="w-full max-w-md">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>First item</AccordionTrigger>
//         <AccordionContent>This item is closed by default.</AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Second item (default open)</AccordionTrigger>
//         <AccordionContent>
//           This item is open by default using defaultValue prop.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Third item</AccordionTrigger>
//         <AccordionContent>
//           This item is also closed by default.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   ),
// };
