import type { Meta, StoryObj } from "@storybook/react";
import { TagField } from "../components/iwbi/TagField";
import { useState } from "react";

const meta: Meta<typeof TagField> = {
  title: "IWBI/TagField",
  component: TagField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "tag1", label: "Tag 1" },
  { value: "tag2", label: "Tag 2" },
  { value: "tag3", label: "Tag 3" },
  { value: "tag4", label: "Tag 4" },
  { value: "tag5", label: "Tag 5" },
];

export const Default: Story = {
  args: {
    options: options,
    value: ["tag1"],
  },
};

const MultipleExample = () => {
  const [value, setValue] = useState<string[]>(["tag1", "tag3"]);

  return (
    <div className="w-[600px]">
      <TagField
        options={options}
        value={value}
        onValueChange={setValue}
        variant="multiple"
      />
      <div className="mt-4 text-sm text-gray-600">
        Selected: {value.join(", ") || "None"}
      </div>
    </div>
  );
};

export const Multiple: Story = {
  render: () => <MultipleExample />,
};

const SingleExample = () => {
  const [value, setValue] = useState<string[]>(["tag2"]);

  return (
    <div className="w-[600px]">
      <TagField
        options={options}
        value={value}
        onValueChange={setValue}
        variant="single"
      />
      <div className="mt-4 text-sm text-gray-600">
        Selected: {value.join(", ") || "None"}
      </div>
    </div>
  );
};

export const Single: Story = {
  render: () => <SingleExample />,
};

export const Disabled: Story = {
  args: {
    options: options,
    value: ["tag1", "tag2"],
    disabled: true,
  },
};

export const LongLabels: Story = {
  args: {
    options: [
      { value: "long1", label: "This is a longer tag label" },
      { value: "long2", label: "Another long tag" },
      { value: "short", label: "Short" },
      { value: "long3", label: "Very long tag label example" },
    ],
    value: ["long1"],
  },
};

const ManyTagsExample = () => {
  const manyOptions = Array.from({ length: 15 }, (_, i) => ({
    value: `tag${i + 1}`,
    label: `Tag ${i + 1}`,
  }));

  const [value, setValue] = useState<string[]>(["tag1", "tag5", "tag10"]);

  return (
    <div className="w-[600px]">
      <TagField options={manyOptions} value={value} onValueChange={setValue} />
      <div className="mt-4 text-sm text-gray-600">
        Selected: {value.join(", ") || "None"}
      </div>
    </div>
  );
};

export const ManyTags: Story = {
  render: () => <ManyTagsExample />,
};

// Status Tags - Light Variant
const statusOptionsLight = [
  { value: "todo", label: "Todo", status: "todo" as const },
  { value: "low", label: "Low", status: "low" as const },
  { value: "medium", label: "Medium", status: "medium" as const },
  { value: "high", label: "High", status: "high" as const },
  { value: "done", label: "Done", status: "done" as const },
];

const StatusLightExample = () => {
  const [value, setValue] = useState<string[]>(["low"]);

  return (
    <div className="w-[600px]">
      <div className="mb-4 text-sm font-semibold text-gray-700">
        Status Tags - Light Variant
      </div>
      <TagField
        options={statusOptionsLight}
        value={value}
        onValueChange={setValue}
        statusVariant="light"
        variant="single"
      />
      <div className="mt-4 text-sm text-gray-600">
        Selected: {value.join(", ") || "None"}
      </div>
    </div>
  );
};

export const StatusLight: Story = {
  render: () => <StatusLightExample />,
};

// Status Tags - Dark Variant
const StatusDarkExample = () => {
  const [value, setValue] = useState<string[]>(["high"]);

  return (
    <div className="w-[600px]">
      <div className="mb-4 text-sm font-semibold text-gray-700">
        Status Tags - Dark Variant
      </div>
      <TagField
        options={statusOptionsLight}
        value={value}
        onValueChange={setValue}
        statusVariant="dark"
        variant="single"
      />
      <div className="mt-4 text-sm text-gray-600">
        Selected: {value.join(", ") || "None"}
      </div>
    </div>
  );
};

export const StatusDark: Story = {
  render: () => <StatusDarkExample />,
};

// All Status Tags - Both Variants
const AllStatusExample = () => {
  const [valueLight, setValueLight] = useState<string[]>([]);
  const [valueDark, setValueDark] = useState<string[]>([]);

  return (
    <div className="w-[600px] space-y-8">
      <div>
        <div className="mb-4 text-sm font-semibold text-gray-700">
          Status, Light
        </div>
        <TagField
          options={statusOptionsLight}
          value={valueLight}
          onValueChange={setValueLight}
          statusVariant="light"
          variant="single"
        />
      </div>
      <div>
        <div className="mb-4 text-sm font-semibold text-gray-700">
          Status, Dark
        </div>
        <TagField
          options={statusOptionsLight}
          value={valueDark}
          onValueChange={setValueDark}
          statusVariant="dark"
          variant="single"
        />
      </div>
    </div>
  );
};

export const AllStatusVariants: Story = {
  render: () => <AllStatusExample />,
};
