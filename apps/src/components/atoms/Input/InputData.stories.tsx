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
    className: "p-2 border-1 border-gray-300"
  },
  parameters:{
    design:{
      type: 'figma',
      url: 'https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=4864-3402&t=ApRDS3YhtIuQqKEA-4'
    }
  }
}

// export const Email: Story = {
//     args:{
//         placeholder: "Email",
//         type: "email",
//         className: 'p-2'
//     },
    
// }

export const Password: Story = {
    args: {
        placeholder: "password",
        className: "p-2 border-1 border-gray-300",
        type: 'Password'
    },
    parameters:{
      design:{
        type: 'figma',
        url: 'https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5339-8017&t=ApRDS3YhtIuQqKEA-4'
      }
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

