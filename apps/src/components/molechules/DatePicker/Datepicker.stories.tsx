// src/stories/Datepicker.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Datepicker from "./Datepicker";
import Image from "next/image";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";


// Define metadata for the Datepicker component story
const meta: Meta< typeof Datepicker> = {
  title: "Smakchet/Molecules/Datepicker",
  component: Datepicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    classname: { control: "text" },
  },

};

export default meta;

// Define a template for the Datepicker stories
type Story = StoryObj< typeof Datepicker>;

// Create various stories for the Datepicker component
export const Pick: Story = {
  args: {
  classname: ""
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const pickdate = await canvas.getByPlaceholderText("Select a date")
    action("date input")()
    await userEvent.click(pickdate);
  },
};

