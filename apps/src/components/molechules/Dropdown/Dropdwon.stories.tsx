import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown"; // Adjust the import path as needed
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/test";

// Define metadata for the Dropdown component story
const meta: Meta<typeof Dropdown> = {
  title: "Smakchet/Molecules/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

// Define a template for the Dropdown stories
type Story = StoryObj<typeof Dropdown>;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Create various stories for the Dropdown component
export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option",
    onChange: action("option selected"),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5161-3101&t=odTvaq7Maqf7udN5-4", // Replace with actual Figma URL
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find the dropdown and open it
    const dropdown = await canvas.getByText('Select an option');
    await userEvent.click(dropdown);

    // Select Option 1
    const option1 = await canvas.getByText('Option 1');
    await userEvent.click(option1);
    await delay(1000);
    
    // Reopen dropdown and select Option 2
    await userEvent.click(dropdown);
    await delay(1000);
    const option2 = await canvas.getByText('Option 2');
    await userEvent.click(option2);

    // Reopen dropdown and select Option 3
    await userEvent.click(dropdown);
    await delay(1000);
    const option3 = await canvas.getByText('Option 3');
    await userEvent.click(option3);
  },
};


