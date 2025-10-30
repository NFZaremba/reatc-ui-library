import React from "react";

// Concept icons matching the WELL Building Standard Figma design
// Each icon represents a different concept with its unique symbol and color

export const IconConceptMind: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#0A5161" />
    <g opacity="0.95">
      <path
        d="M24 15C19 15 15 19 15 24C15 29 19 33 24 33C29 33 33 29 33 24C33 19 29 15 24 15ZM24 30C20.7 30 18 27.3 18 24C18 20.7 20.7 18 24 18C27.3 18 30 20.7 30 24C30 27.3 27.3 30 24 30Z"
        fill="white"
      />
      <circle cx="24" cy="21" r="1.5" fill="white" />
      <circle cx="20.5" cy="24.5" r="1.5" fill="white" />
      <circle cx="27.5" cy="24.5" r="1.5" fill="white" />
    </g>
  </svg>
);

export const IconConceptCommunity: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#0F748A" />
    <g opacity="0.95">
      <circle cx="24" cy="19" r="3.5" fill="white" />
      <path
        d="M16 30C16 26.7 18.7 24 22 24H26C29.3 24 32 26.7 32 30V32H16V30Z"
        fill="white"
      />
      <circle cx="15" cy="22" r="2.5" fill="white" />
      <circle cx="33" cy="22" r="2.5" fill="white" />
    </g>
  </svg>
);

export const IconConceptMovement: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#149EBD" />
    <g opacity="0.95">
      <path
        d="M28 20L32 24L28 28M20 28L16 24L20 20"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 24H28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const IconConceptWater: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#39C9EA" />
    <g opacity="0.95">
      <path
        d="M24 15C24 15 17 22 17 26.5C17 30.1 20 33 24 33C28 33 31 30.1 31 26.5C31 22 24 15 24 15Z"
        fill="white"
      />
    </g>
  </svg>
);

export const IconConceptAir: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#87DFF2" />
    <g opacity="0.95">
      <path
        d="M15 20H27C28.7 20 30 21.3 30 23C30 24.7 28.7 26 27 26H15"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M15 28H25C26.7 28 28 29.3 28 31"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const IconConceptLight: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#8AEFDB" />
    <g opacity="0.95">
      <circle cx="24" cy="24" r="4" fill="white" />
      <path
        d="M24 13V16M24 32V35M35 24H32M16 24H13M31 17L29 19M19 29L17 31M31 31L29 29M19 19L17 17"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const IconConceptThermalComfort: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#3EDDBF" />
    <g opacity="0.95">
      <rect x="22" y="15" width="4" height="16" rx="2" fill="white" />
      <circle cx="24" cy="30" r="3.5" fill="white" />
      <path
        d="M24 19V28"
        stroke="#3EDDBF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const IconConceptNourishment: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#17AA8D" />
    <g opacity="0.95">
      <circle cx="24" cy="26" r="6" fill="white" />
      <path
        d="M24 14V20M21 16L24 14L27 16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const IconConceptSound: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#0C705C" />
    <g opacity="0.95">
      <path
        d="M18 20V28M23 17V31M28 21V27M33 23V25"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const IconConceptMaterials: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="24" cy="24" r="24" fill="#0A4F41" />
    <g opacity="0.95">
      <rect x="17" y="17" width="14" height="14" rx="2" fill="white" />
      <path d="M24 17V31M17 24H31" stroke="#0A4F41" strokeWidth="2" />
    </g>
  </svg>
);
