import React from "react";
import { cn } from "../../lib/utils";

interface UtilityChevronDownProps {
  className?: string;
  svgClass?: string;
}

export const UtilityChevronDown: React.FC<UtilityChevronDownProps> = ({
  className,
  svgClass,
}) => {
  return (
    <div className={cn("size-4 flex items-center justify-center", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="6"
        viewBox="0 0 12 6"
        fill="none"
        className={cn("text-gray-500", svgClass)}
      >
        <path
          d="M11 0.75L6 5.25L1 0.75"
          stroke="#71747D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
