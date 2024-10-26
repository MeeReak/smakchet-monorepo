import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Popup from "./Popup";

const meta: Meta<typeof Popup> = {
    title: "Smakchet/Molecules/Popup",
    component: Popup,
    parameters: {
      layout: "padded",
    },
    tags: ["autodocs"], 
  };

export default meta;
type Story = StoryObj<typeof Popup>
export const Default: Story = {
    args: {
        children: "aa"
    }
}