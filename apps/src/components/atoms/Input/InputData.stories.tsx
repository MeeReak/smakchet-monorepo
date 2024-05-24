import React from "react"
import type { Meta, StoryObj } from "@storybook/react";
import { InputData } from "./InputData";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof InputData> = {
  title: "Smakchet/Atoms/InputData",
  component: InputData,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputData>;



export const Text: Story = {
  args: {
    placeholder: "Text",
    type: "text",
  }
}

export const Email: Story = {
    args:{
        placeholder: "Email",
        type: "email",
    }
}

export const Password: Story = {
    args: {
        placeholder: "Password",
        type: "password"
    }
}

export const Checkbox: Story = {
    args: {
        type: "checkbox"
    }
}

export const Radio: Story = {
    args:{
        type: "radio"
    }
}

