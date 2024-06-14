import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer"; // Adjust the import path as needed
import { argv } from "process";

// Define metadata for the Footer component story
const meta: Meta<typeof Footer> = {
  title: "Smakchet/Molecules/Footer",
  component: Footer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

// Define a template for the Footer stories
type Story = StoryObj<typeof Footer>;

// Create a basic story for the Footer component
export const Default: Story = {
    parameters: {
        design: {
          type: "figma",
          url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5975-3222&t=odTvaq7Maqf7udN5-4", // Replace with actual Figma URL
        },
      },
}


// Default story (basic usage of the Footer component)

