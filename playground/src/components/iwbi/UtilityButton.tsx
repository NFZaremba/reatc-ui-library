"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const utilityButtonVariants = cva(
  "inline-flex items-center justify-center h-8 px-4 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        "general-primary":
          "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
        "general-secondary":
          "bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-200",
        "general-tertiary":
          "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-200",
        "tooltip-primary":
          "bg-cyan-300 text-white hover:bg-cyan-400 focus-visible:ring-cyan-300",
        "tooltip-secondary":
          "bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-500",
      },
    },
    defaultVariants: {
      variant: "general-primary",
    },
  }
);

export interface UtilityButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof utilityButtonVariants> {
  asChild?: boolean;
}

const UtilityButton = React.forwardRef<HTMLButtonElement, UtilityButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        className={cn(utilityButtonVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        <span className="body-small font-semibold">{children}</span>
      </button>
    );
  }
);

UtilityButton.displayName = "UtilityButton";

export { UtilityButton, utilityButtonVariants };

