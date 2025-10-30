"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center size-8 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-white hover:bg-gray-50 focus-visible:ring-gray-100",
        light:
          "bg-white border border-gray-100 hover:bg-gray-50 focus-visible:ring-gray-100",
        semitransparent:
          "bg-black/[0.08] hover:bg-black/[0.12] focus-visible:ring-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon?: React.ReactNode;
  label?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, icon, label, children, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant }), className)}
        ref={ref}
        aria-label={label}
        {...props}
      >
        {icon || children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
