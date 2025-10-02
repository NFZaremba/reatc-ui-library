import React from "react";
import { cn } from "../../lib/utils";

interface UtilitySearchProps {
  className?: string;
  svgClass?: string;
}

export const UtilitySearch: React.FC<UtilitySearchProps> = ({
  className,
  svgClass,
}) => {
  return (
    <div
      className={cn("size-[14px] flex items-center justify-center", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={cn("size-[14px] text-gray-500", svgClass)}
      >
        <path
          d="M11.8889 6.44444C11.8889 9.45133 9.45133 11.8889 6.44444 11.8889C3.43756 11.8889 1 9.45133 1 6.44444C1 3.43756 3.43756 1 6.44444 1C9.45133 1 11.8889 3.43756 11.8889 6.44444Z"
          fill="white"
        />
        <path
          d="M15 15L10.3333 10.3333M11.8889 6.44444C11.8889 9.45133 9.45133 11.8889 6.44444 11.8889C3.43756 11.8889 1 9.45133 1 6.44444C1 3.43756 3.43756 1 6.44444 1C9.45133 1 11.8889 3.43756 11.8889 6.44444Z"
          stroke="#71747D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
