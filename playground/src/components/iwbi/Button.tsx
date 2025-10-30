"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        "primary-gradient":
          "bg-gradient-to-r from-[#41d5f6] via-[#3eecd1] to-[#66fcd9] text-white hover:opacity-90 relative before:absolute before:inset-0 before:rounded-full before:bg-[#0f748a]/60 before:mix-blend-multiply",
        "primary-dark":
          "bg-cyan-800 text-white hover:bg-cyan-900 focus-visible:ring-cyan-800",
        "secondary-light":
          "bg-white border border-gray-200 text-cyan-800 hover:bg-gray-50 focus-visible:ring-gray-200",
        "tertiary-light":
          "bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 focus-visible:ring-blue-200",
      },
      size: {
        xlarge: "h-16 px-10",
        large: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "primary-dark",
      size: "large",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 body-small font-semibold">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

