import * as React from "react";
import { cn } from "@/lib/utils";

export type TagOption = {
  value: string;
  label: string;
  status?: "todo" | "low" | "medium" | "high" | "done";
};

type TagFieldProps = {
  options: TagOption[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  variant?: "single" | "multiple";
  statusVariant?: "light" | "dark";
};

const getStatusColors = (
  status?: "todo" | "low" | "medium" | "high" | "done",
  statusVariant: "light" | "dark" = "light"
) => {
  if (!status) return null;

  const statusColors = {
    light: {
      todo: {
        bg: "bg-gray-100",
        text: "text-gray-600",
        hover: "hover:bg-gray-200",
      },
      low: {
        bg: "bg-cyan-100",
        text: "text-cyan-600",
        hover: "hover:bg-cyan-200",
      },
      medium: {
        bg: "bg-plum-100",
        text: "text-plum-600",
        hover: "hover:bg-plum-200",
      },
      high: {
        bg: "bg-coral-100",
        text: "text-coral-600",
        hover: "hover:bg-coral-200",
      },
      done: {
        bg: "bg-emerald-100",
        text: "text-emerald-600",
        hover: "hover:bg-emerald-200",
      },
    },
    dark: {
      todo: {
        bg: "bg-gray-600",
        text: "text-gray-100",
        hover: "hover:bg-gray-700",
      },
      low: {
        bg: "bg-cyan-700",
        text: "text-cyan-100",
        hover: "hover:bg-cyan-800",
      },
      medium: {
        bg: "bg-plum-700",
        text: "text-plum-100",
        hover: "hover:bg-plum-800",
      },
      high: {
        bg: "bg-coral-700",
        text: "text-coral-100",
        hover: "hover:bg-coral-800",
      },
      done: {
        bg: "bg-emerald-700",
        text: "text-emerald-100",
        hover: "hover:bg-emerald-800",
      },
    },
  };

  return statusColors[statusVariant][status];
};

export const TagField = ({
  options,
  value = [],
  onValueChange,
  disabled = false,
  variant = "multiple",
  statusVariant = "light",
}: TagFieldProps) => {
  const [selected, setSelected] = React.useState<string[]>(value);

  React.useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleToggle = (optionValue: string) => {
    if (disabled) return;

    let newSelected: string[];

    if (variant === "single") {
      // Single selection mode - only one can be active at a time
      newSelected = selected.includes(optionValue) ? [] : [optionValue];
    } else {
      // Multiple selection mode - toggle the clicked option
      if (selected.includes(optionValue)) {
        newSelected = selected.filter((v) => v !== optionValue);
      } else {
        newSelected = [...selected, optionValue];
      }
    }

    setSelected(newSelected);
    onValueChange?.(newSelected);
  };

  return (
    <div className="flex flex-wrap gap-[12px] items-start">
      {options.map((option) => {
        const isActive = selected.includes(option.value);
        const statusColors = getStatusColors(option.status, statusVariant);

        // If status colors are provided, use them; otherwise use default colors
        if (statusColors) {
          return (
            <button
              key={option.value}
              onClick={() => handleToggle(option.value)}
              disabled={disabled}
              className={cn(
                "flex items-center p-[8px] rounded-[6px] transition-all",
                "font-['Mazzard_Soft_M',_sans-serif] text-[12px] font-semibold leading-[12px] tracking-[0.5px] uppercase",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                statusColors.bg,
                statusColors.text,
                statusColors.hover,
                isActive && "ring-2 ring-offset-2 ring-gray-400"
              )}
            >
              {option.label}
            </button>
          );
        }

        // Default styling (original behavior)
        return (
          <button
            key={option.value}
            onClick={() => handleToggle(option.value)}
            disabled={disabled}
            className={cn(
              "flex items-center h-[32px] px-[12px] rounded-[6px] transition-all",
              "font-['Mazzard_Soft_M',_sans-serif] text-[14px] font-medium leading-[19.6px]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              isActive
                ? "bg-white border border-[#39c9ea] text-[#282a31] hover:border-[#2ab5d9]"
                : "bg-[#eff5fb] text-[#286495] hover:bg-[#e0eef8]"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
