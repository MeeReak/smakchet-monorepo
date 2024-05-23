import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon";
import { FaBellSlash } from "react-icons/fa";
import { action } from "@storybook/addon-actions";


// Define the metadata for the ButtonIcon component stories
const meta: Meta<typeof ButtonIcon> = {
  title: "Smakchet/Atoms/ButtonIcon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

// Define the default story for the ButtonIcon component
export const Default: Story = {
    args: {
        className: "",
        icon: "",
        onclick: action('click ')
    }
}