import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ModalPagination } from "../components/iwbi/ModalPagination";

const meta: Meta<typeof ModalPagination> = {
  title: "IWBI/ModalPagination",
  component: ModalPagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "The current page number",
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "The total number of pages",
    },
    disabled: {
      control: "boolean",
      description: "Disables the pagination controls",
    },
    onPageChange: {
      description: "Callback fired when page changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModalPagination>;

// Interactive wrapper component to demonstrate functionality
const ModalPaginationDemo = ({
  totalPages,
  disabled,
}: {
  totalPages: number;
  disabled?: boolean;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col items-center gap-4">
      <ModalPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        disabled={disabled}
      />
      <p className="body-small text-gray-600">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => <ModalPaginationDemo totalPages={10} />,
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 3,
    totalPages: 5,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
  },
};

export const Disabled: Story = {
  render: () => <ModalPaginationDemo totalPages={10} disabled />,
};

export const TwoPages: Story = {
  render: () => <ModalPaginationDemo totalPages={2} />,
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};

export const ManyPages: Story = {
  render: () => <ModalPaginationDemo totalPages={100} />,
};

