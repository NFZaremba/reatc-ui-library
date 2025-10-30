import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ConfirmationModal } from "../components/iwbi/ConfirmationModal";

const meta: Meta<typeof ConfirmationModal> = {
  title: "IWBI/ConfirmationModal",
  component: ConfirmationModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <ConfirmationModal
        open={open}
        onOpenChange={setOpen}
        onSubmit={(e) => {
          console.log("Submitted!", e);
          setOpen(false);
        }}
      >
        <button className="btn bg-blue-600 px-6 min-h-8 border-none max-w-fit rounded-full">
          <span className="body-small font-semibold text-white">
            Open Confirmation Modal
          </span>
        </button>
      </ConfirmationModal>
    );
  },
};

export const CustomText: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <ConfirmationModal
        open={open}
        onOpenChange={setOpen}
        title="Delete this item?"
        description="This action cannot be undone. Are you sure you want to proceed?"
        submitText="Delete"
        cancelText="Cancel"
        onSubmit={(e) => {
          console.log("Deleted!", e);
          setOpen(false);
        }}
      >
        <button className="btn bg-red-600 px-6 min-h-8 border-none max-w-fit rounded-full">
          <span className="body-small font-semibold text-white">
            Delete Item
          </span>
        </button>
      </ConfirmationModal>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <ConfirmationModal
        open={open}
        onOpenChange={setOpen}
        title="Revert changes?"
        description="All unsaved changes will be lost. This cannot be undone."
        submitText="Yes, revert"
        cancelText="Keep editing"
        onSubmit={(e) => {
          console.log("Reverted!", e);
          setOpen(false);
        }}
      >
        <button className="btn bg-white px-6 min-h-8 border border-blue-200 max-w-fit rounded-full">
          <span className="body-small font-semibold text-blue-600">
            Revert Changes
          </span>
        </button>
      </ConfirmationModal>
    );
  },
};

export const MultipleModals: Story = {
  render: () => {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    return (
      <div className="flex gap-4">
        <ConfirmationModal
          open={open1}
          onOpenChange={setOpen1}
          title="Save changes?"
          submitText="Save"
          cancelText="Cancel"
          onSubmit={(e) => {
            console.log("Saved!", e);
            setOpen1(false);
          }}
        >
          <button className="btn bg-blue-600 px-6 min-h-8 border-none max-w-fit rounded-full">
            <span className="body-small font-semibold text-white">Save</span>
          </button>
        </ConfirmationModal>

        <ConfirmationModal
          open={open2}
          onOpenChange={setOpen2}
          title="Discard changes?"
          description="You have unsaved changes that will be lost."
          submitText="Discard"
          cancelText="Keep"
          onSubmit={(e) => {
            console.log("Discarded!", e);
            setOpen2(false);
          }}
        >
          <button className="btn bg-white px-6 min-h-8 border border-gray-200 max-w-fit rounded-full">
            <span className="body-small font-semibold text-gray-600">
              Discard
            </span>
          </button>
        </ConfirmationModal>

        <ConfirmationModal
          open={open3}
          onOpenChange={setOpen3}
          title="Logout?"
          description="Are you sure you want to logout?"
          submitText="Logout"
          cancelText="Stay"
          onSubmit={(e) => {
            console.log("Logged out!", e);
            setOpen3(false);
          }}
        >
          <button className="btn bg-white px-6 min-h-8 border border-red-200 max-w-fit rounded-full">
            <span className="body-small font-semibold text-red-600">
              Logout
            </span>
          </button>
        </ConfirmationModal>
      </div>
    );
  },
};

