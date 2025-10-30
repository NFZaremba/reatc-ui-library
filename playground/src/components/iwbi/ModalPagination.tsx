import * as React from "react";
import { cn } from "@/lib/utils";

interface ModalPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  disabled?: boolean;
  className?: string;
}

const ModalPagination = React.forwardRef<HTMLDivElement, ModalPaginationProps>(
  (
    { currentPage, totalPages, onPageChange, disabled = false, className },
    ref
  ) => {
    const canGoPrevious = currentPage > 1 && !disabled;
    const canGoNext = currentPage < totalPages && !disabled;

    const handlePrevious = () => {
      if (canGoPrevious && onPageChange) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (canGoNext && onPageChange) {
        onPageChange(currentPage + 1);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-end overflow-hidden rounded-full",
          className
        )}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          aria-label="Previous page"
          className={cn(
            "flex h-8 w-12 items-center justify-center rounded-l-full border border-gray-100 transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "mr-[-1px]", // Overlap border with next button
            canGoPrevious
              ? "bg-gray-100 hover:bg-gray-200 cursor-pointer"
              : "bg-gray-100 opacity-50 cursor-not-allowed"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="size-3.5"
          >
            <path
              d="M8.75 10.5L5.25 7L8.75 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          aria-label="Next page"
          className={cn(
            "flex h-8 w-12 items-center justify-center rounded-r-full border border-gray-100 transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            canGoNext
              ? "bg-white hover:bg-gray-50 cursor-pointer"
              : "bg-white opacity-50 cursor-not-allowed"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="size-3.5"
          >
            <path
              d="M5.25 3.5L8.75 7L5.25 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  }
);

ModalPagination.displayName = "ModalPagination";

export { ModalPagination };

