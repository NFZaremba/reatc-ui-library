"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const viewControlVariants = cva(
  "inline-flex items-center rounded-full bg-white border border-gray-100 p-0 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-100",
        outline:
          "border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const viewControlItemVariants = cva(
  "inline-flex items-center justify-center rounded-full h-8 w-12 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer relative",
  {
    variants: {
      variant: {
        default:
          "text-gray-600 hover:text-gray-700 data-[state=active]:bg-cyan-700 data-[state=active]:text-white",
        outline:
          "text-gray-600 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const ViewControlContext = React.createContext<{
  value: string;
  onChange: (value: string) => void;
  variant: "default" | "outline";
}>({
  value: "",
  onChange: () => {},
  variant: "default",
});

interface ViewControlProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof viewControlVariants> {
  value: string;
  onValueChange: (value: string) => void;
}

const ViewControl = React.forwardRef<HTMLDivElement, ViewControlProps>(
  ({ className, variant, value, onValueChange, children, ...props }, ref) => {
    return (
      <ViewControlContext.Provider
        value={{
          value,
          onChange: onValueChange,
          variant: variant || "default",
        }}
      >
        <div
          ref={ref}
          role="tablist"
          className={cn(viewControlVariants({ variant }), className)}
          {...props}
        >
          {children}
        </div>
      </ViewControlContext.Provider>
    );
  }
);

ViewControl.displayName = "ViewControl";

interface ViewControlItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  value: string;
}

const ViewControlItem = React.forwardRef<
  HTMLButtonElement,
  ViewControlItemProps
>(({ className, value, children, ...props }, ref) => {
  const context = React.useContext(ViewControlContext);
  const isActive = context.value === value;

  return (
    <button
      ref={ref}
      role="tab"
      type="button"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => context.onChange(value)}
      className={cn(
        viewControlItemVariants({ variant: context.variant }),
        className
      )}
      {...props}
    >
      <span className="relative inline-flex items-center justify-center size-4">
        {children}
      </span>
    </button>
  );
});

ViewControlItem.displayName = "ViewControlItem";

export { ViewControl, ViewControlItem };

