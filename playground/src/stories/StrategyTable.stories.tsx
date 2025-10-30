import type { Meta, StoryObj } from "@storybook/react";
import { StrategyTable, type StrategyTableData } from "../components/iwbi/StrategyTable";
import {
  IconConceptMind,
  IconConceptCommunity,
  IconConceptMovement,
  IconConceptWater,
  IconConceptAir,
  IconConceptLight,
  IconConceptThermalComfort,
  IconConceptNourishment,
  IconConceptSound,
  IconConceptMaterials,
} from "../components/icons/ConceptIcons";

const meta: Meta<typeof StrategyTable> = {
  title: "IWBI/StrategyTable",
  component: StrategyTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StrategyTable>;

// Sample data matching the Figma design
const sampleData: StrategyTableData[] = [
  {
    concept: {
      id: "mind",
      type: "mind",
      name: "Mind",
      icon: <IconConceptMind />,
    },
    theme: {
      id: "mind-theme",
      code: "M#",
      name: "Theme",
    },
    strategies: [
      {
        id: "mind-strategy",
        code: "M#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "community",
      type: "community",
      name: "Community",
      icon: <IconConceptCommunity />,
    },
    theme: {
      id: "community-theme",
      code: "C#",
      name: "Theme",
    },
    strategies: [
      {
        id: "community-strategy",
        code: "C#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "movement",
      type: "movement",
      name: "Movement",
      icon: <IconConceptMovement />,
    },
    theme: {
      id: "movement-theme",
      code: "V#",
      name: "Theme",
    },
    strategies: [
      {
        id: "movement-strategy",
        code: "V#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "water",
      type: "water",
      name: "Water",
      icon: <IconConceptWater />,
    },
    theme: {
      id: "water-theme",
      code: "W#",
      name: "Theme",
    },
    strategies: [
      {
        id: "water-strategy",
        code: "W#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "air",
      type: "air",
      name: "Air",
      icon: <IconConceptAir />,
    },
    theme: {
      id: "air-theme",
      code: "A#",
      name: "Theme",
    },
    strategies: [
      {
        id: "air-strategy",
        code: "A#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "light",
      type: "light",
      name: "Light",
      icon: <IconConceptLight />,
    },
    theme: {
      id: "light-theme",
      code: "L#",
      name: "Theme",
    },
    strategies: [
      {
        id: "light-strategy",
        code: "L#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "thermal-comfort",
      type: "thermalComfort",
      name: "Thermal Comfort",
      icon: <IconConceptThermalComfort />,
    },
    theme: {
      id: "thermal-theme",
      code: "T#",
      name: "Theme",
    },
    strategies: [
      {
        id: "thermal-strategy",
        code: "T#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "nourishment",
      type: "nourishment",
      name: "Nourishment",
      icon: <IconConceptNourishment />,
    },
    theme: {
      id: "nourishment-theme",
      code: "N#",
      name: "Theme",
    },
    strategies: [
      {
        id: "nourishment-strategy",
        code: "N#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "sound",
      type: "sound",
      name: "Sound",
      icon: <IconConceptSound />,
    },
    theme: {
      id: "sound-theme",
      code: "S#",
      name: "Theme",
    },
    strategies: [
      {
        id: "sound-strategy",
        code: "S#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
  {
    concept: {
      id: "materials",
      type: "materials",
      name: "Materials",
      icon: <IconConceptMaterials />,
    },
    theme: {
      id: "materials-theme",
      code: "X#",
      name: "Theme",
    },
    strategies: [
      {
        id: "materials-strategy",
        code: "X#.#",
        name: "Strategy",
        score: "#–#",
        hasTarget: true,
      },
    ],
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const SingleConcept: Story = {
  args: {
    data: [sampleData[0]],
  },
};

export const ThreeConcepts: Story = {
  args: {
    data: sampleData.slice(0, 3),
  },
};

// Example with multiple strategies per concept
const multipleStrategiesData: StrategyTableData[] = [
  {
    concept: {
      id: "water-multi",
      type: "water",
      name: "Water",
      icon: <IconConceptWater />,
    },
    theme: {
      id: "water-theme-multi",
      code: "W#",
      name: "Theme",
    },
    strategies: [
      {
        id: "water-strategy-1",
        code: "W1.1",
        name: "Drinking Water Quality",
        score: "2–4",
        hasTarget: true,
      },
      {
        id: "water-strategy-2",
        code: "W1.2",
        name: "Inorganic Contaminants",
        score: "1–3",
        hasTarget: true,
      },
      {
        id: "water-strategy-3",
        code: "W1.3",
        name: "Organic Contaminants",
        score: "2–5",
        hasTarget: false,
      },
    ],
  },
  {
    concept: {
      id: "air-multi",
      type: "air",
      name: "Air",
      icon: <IconConceptAir />,
    },
    theme: {
      id: "air-theme-multi",
      code: "A#",
      name: "Theme",
    },
    strategies: [
      {
        id: "air-strategy-1",
        code: "A1.1",
        name: "Air Quality Standards",
        score: "3–6",
        hasTarget: true,
      },
      {
        id: "air-strategy-2",
        code: "A1.2",
        name: "Ventilation Effectiveness",
        score: "2–4",
        hasTarget: true,
      },
    ],
  },
];

export const MultipleStrategies: Story = {
  args: {
    data: multipleStrategiesData,
  },
};

// Custom width demo
export const CustomWidth: Story = {
  args: {
    data: sampleData.slice(0, 5),
    className: "max-w-4xl",
  },
};

