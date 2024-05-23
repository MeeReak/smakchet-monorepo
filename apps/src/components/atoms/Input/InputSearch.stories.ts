import type { Meta, StoryObj } from "@storybook/react";
import { InputSearch } from "./InputSearch";
import { action } from "@storybook/addon-actions";


// Define the metadata for the InputSearch component stories
const meta: Meta<typeof InputSearch> = {
  title: "Smakchet/Atoms/InputSearch",
  component: InputSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputSearch>;

// Define the default story for the InputSearch component
export const Default: Story = {
  args: {
    
  },
};
