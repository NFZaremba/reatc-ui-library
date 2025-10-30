import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "../../lib/utils";

export interface ConfirmationModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  submitText?: string;
  cancelText?: string;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onOpenChange,
  title = "Are you sure?",
  description = "",
  onSubmit,
  submitText = "Yes, revert",
  cancelText = "Nevermind",
  trigger,
  children,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:min-w-[297px]" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="heading-xsmall text-[18px] font-normal text-gray-800 text-center mb-8">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="body-small text-gray-600 text-center mb-8">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="flex gap-4 justify-center items-center">
          <button
            className={cn(
              "btn bg-white px-6 min-h-8 border border-blue-200 max-w-fit rounded-full"
            )}
            onClick={() => onOpenChange?.(false)}
          >
            <span className="body-small font-semibold text-blue-600">
              {cancelText}
            </span>
          </button>
          <button
            className={cn(
              "btn bg-blue-600 px-6 min-h-8 border-none max-w-fit rounded-full"
            )}
            onClick={onSubmit}
          >
            <span className="body-small font-semibold text-white">
              {submitText}
            </span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
