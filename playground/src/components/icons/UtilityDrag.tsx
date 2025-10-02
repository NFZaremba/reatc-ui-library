import React from "react";
import { cn } from "../../lib/utils";

interface UtilityDragProps {
  className?: string;
  svgClass?: string;
}

export const UtilityDrag: React.FC<UtilityDragProps> = ({
  className,
  svgClass,
}) => {
  return (
    <div className={cn("size-4 flex items-center justify-center", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
        className={cn("text-gray-500", svgClass)}
      >
        <path
          d="M2 8.875C2.55228 8.875 3 8.48325 3 8C3 7.51675 2.55228 7.125 2 7.125C1.44772 7.125 1 7.51675 1 8C1 8.48325 1.44772 8.875 2 8.875Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 2.75C2.55228 2.75 3 2.35825 3 1.875C3 1.39175 2.55228 1 2 1C1.44772 1 1 1.39175 1 1.875C1 2.35825 1.44772 2.75 2 2.75Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 15C2.55228 15 3 14.6082 3 14.125C3 13.6418 2.55228 13.25 2 13.25C1.44772 13.25 1 13.6418 1 14.125C1 14.6082 1.44772 15 2 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8.875C8.55228 8.875 9 8.48325 9 8C9 7.51675 8.55228 7.125 8 7.125C7.44772 7.125 7 7.51675 7 8C7 8.48325 7.44772 8.875 8 8.875Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 2.75C8.55228 2.75 9 2.35825 9 1.875C9 1.39175 8.55228 1 8 1C7.44772 1 7 1.39175 7 1.875C7 2.35825 7.44772 2.75 8 2.75Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 15C8.55228 15 9 14.6082 9 14.125C9 13.6418 8.55228 13.25 8 13.25C7.44772 13.25 7 13.6418 7 14.125C7 14.6082 7.44772 15 8 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
