import * as React from "react";
import { cn } from "@/lib/utils";
import { UtilityChevronDown } from "../icons/UtilityChevronDown";

// Define the concept colors matching Figma design
export const conceptColors = {
  mind: {
    solid: "#0a5161",
    light: "rgba(10,81,97,0.08)",
    border: "rgba(10,81,97,0.16)",
    prefix: "M",
  },
  community: {
    solid: "#0f748a",
    light: "rgba(15,116,138,0.12)",
    border: "rgba(15,116,138,0.24)",
    prefix: "C",
  },
  movement: {
    solid: "#149ebd",
    light: "rgba(20,158,189,0.12)",
    border: "rgba(20,158,189,0.24)",
    prefix: "V",
  },
  water: {
    solid: "#39c9ea",
    light: "rgba(57,201,234,0.12)",
    border: "rgba(57,201,234,0.24)",
    prefix: "W",
  },
  air: {
    solid: "#87dff2",
    light: "rgba(135,223,242,0.12)",
    border: "rgba(135,223,242,0.24)",
    prefix: "A",
  },
  light: {
    solid: "#8aefdb",
    light: "rgba(138,239,219,0.12)",
    border: "rgba(138,239,219,0.24)",
    prefix: "L",
  },
  thermalComfort: {
    solid: "#3eddbf",
    light: "rgba(62,221,191,0.12)",
    border: "rgba(62,221,191,0.24)",
    prefix: "T",
  },
  nourishment: {
    solid: "#17aa8d",
    light: "rgba(23,170,141,0.12)",
    border: "rgba(23,170,141,0.24)",
    prefix: "N",
  },
  sound: {
    solid: "#0c705c",
    light: "rgba(12,112,92,0.12)",
    border: "rgba(12,112,92,0.24)",
    prefix: "S",
  },
  materials: {
    solid: "#0a4f41",
    light: "rgba(10,79,65,0.08)",
    border: "rgba(10,79,65,0.16)",
    prefix: "X",
  },
} as const;

export type ConceptType = keyof typeof conceptColors;

export interface StrategyItem {
  id: string;
  code: string;
  name: string;
  score?: string;
  hasTarget?: boolean;
}

export interface ThemeItem {
  id: string;
  code: string;
  name: string;
}

export interface ConceptItem {
  id: string;
  type: ConceptType;
  name: string;
  icon: React.ReactNode;
}

export interface StrategyTableData {
  concept: ConceptItem;
  theme: ThemeItem;
  strategies: StrategyItem[];
}

interface StrategyTableRowProps {
  data: StrategyTableData;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const StrategyTableRow: React.FC<StrategyTableRowProps> = ({
  data,
  isExpanded = false,
  onToggle,
}) => {
  const { concept, theme, strategies } = data;
  const colors = conceptColors[concept.type];

  return (
    <>
      {/* Concept Row */}
      <div
        className={cn(
          "flex items-center gap-4 p-4 border border-gray-200 bg-cyan-50",
          "border-b-0 first:rounded-t-xl"
        )}
      >
        {/* Icon */}
        <div className="size-12 flex items-center justify-center shrink-0">
          {concept.icon}
        </div>

        {/* Name */}
        <div className="flex-1">
          <span className="overline-large text-gray-800">
            {concept.name.toUpperCase()}
          </span>
        </div>

        {/* Actions */}
        <button
          onClick={onToggle}
          className="size-8 flex items-center justify-center"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          <div className={cn("rotate-180 transition-transform", isExpanded && "rotate-0")}>
            <UtilityChevronDown />
          </div>
        </button>
      </div>

      {/* Theme Row */}
      {isExpanded && (
        <div className="flex items-center gap-4 p-4 border border-gray-200 bg-cyan-50 border-b-0">
          {/* Code Badge */}
          <div
            className="flex items-center justify-center h-8 w-12 rounded-md shrink-0"
            style={{ backgroundColor: colors.solid }}
          >
            <span className="body-small font-semibold text-white">
              {colors.prefix}#
            </span>
          </div>

          {/* Name */}
          <div className="flex-1">
            <span className="body-base font-medium text-gray-800">Theme</span>
          </div>

          {/* Actions */}
          <div className="size-8 flex items-center justify-center">
            <div className="rotate-180">
              <UtilityChevronDown />
            </div>
          </div>
        </div>
      )}

      {/* Strategy Rows */}
      {isExpanded &&
        strategies.map((strategy, index) => {
          const isLast = index === strategies.length - 1;
          
          return (
            <div
              key={strategy.id}
              className={cn(
                "flex items-center gap-4 p-4 border border-gray-200 bg-white",
                "border-b-0",
                isLast && "rounded-b-xl border-b"
              )}
            >
              {/* Code Badge */}
              <div
                className="flex items-center justify-center h-8 w-12 rounded-md border shrink-0"
                style={{
                  backgroundColor: colors.light,
                  borderColor: colors.border,
                }}
              >
                <span
                  className="body-small font-semibold"
                  style={{ color: colors.solid }}
                >
                  {strategy.code}
                </span>
              </div>

              {/* Name */}
              <div className="flex-1">
                <span className="body-base font-medium text-gray-800">
                  {strategy.name}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                {strategy.hasTarget && (
                  <div className="size-8 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-gray-400"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="7"
                        cy="7"
                        r="3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="7" cy="7" r="1" fill="currentColor" />
                    </svg>
                  </div>
                )}

                {strategy.score && (
                  <div className="flex items-end gap-1">
                    <span className="body-large font-semibold text-gray-800">
                      {strategy.score}
                    </span>
                    <span className="overline-medium font-semibold text-gray-800">
                      PTS
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
};

interface StrategyTableProps {
  data: StrategyTableData[];
  className?: string;
}

export const StrategyTable: React.FC<StrategyTableProps> = ({
  data,
  className,
}) => {
  const [expandedIds, setExpandedIds] = React.useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn("flex flex-col", className)}>
      {data.map((item) => (
        <StrategyTableRow
          key={item.concept.id}
          data={item}
          isExpanded={expandedIds.has(item.concept.id)}
          onToggle={() => toggleExpanded(item.concept.id)}
        />
      ))}
    </div>
  );
};

