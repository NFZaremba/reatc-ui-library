import React from "react";
import { cn } from "../../lib/utils";

interface UtilityResetProps {
  className?: string;
  svgClass?: string;
}

export const UtilityReset: React.FC<UtilityResetProps> = ({
  className,
  svgClass,
}) => {
  return (
    <div className={cn("size-4 flex items-center justify-center", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className={cn("text-gray-500", svgClass)}
      >
        <path
          d="M1 7C1 9.76142 3.23858 12 6 12C8.76142 12 11 9.76142 11 7C11 4.23858 8.76142 2 6 2C4.5 2 3.17857 2.67857 2.28571 3.71429M2.28571 1.5V3.71429M2.28571 3.71429H4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

