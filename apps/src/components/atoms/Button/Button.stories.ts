import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";


// Define the metadata for the Button component stories
const meta: Meta<typeof Button> = {
  title: "Smakchet/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// Define the default story for the Button component
export const Default: Story = {
  args: {
    children: "Button",
    colorScheme: "White",
    bgColor: "primary",
    size: "h4",
    round: "md",
    onclick: action('click'),
  },
};
