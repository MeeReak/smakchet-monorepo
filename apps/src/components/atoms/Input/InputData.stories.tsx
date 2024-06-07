import React from "react"
import type { Meta, StoryObj } from "@storybook/react";
import { InputData } from "./InputData";
import { action } from "@storybook/addon-actions";
import { userEvent,within } from "@storybook/test";

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
    className: "p-2 border-1 border-gray-300",
    onChange: action('Text input')

  },
  parameters:{
    design:{
      type: 'figma',
      url: 'https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=4864-3402&t=ApRDS3YhtIuQqKEA-4'
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText('Text')
    await userEvent.type(input, "hello");
  }, 
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
        type: 'Password',
        onChange: action('password input')
    },
    parameters:{
      design:{
        type: 'figma',
        url: 'https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5339-8017&t=ApRDS3YhtIuQqKEA-4'
      }
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const input = await canvas.getByPlaceholderText('password')
      await userEvent.type(input, "Password");
    }, 
}

export const Checkbox: Story = {
    args: {
        type: "checkbox",
        onChange: action('checkbox clicked')
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const input = await canvas.getByRole('checkbox')
      await userEvent.click(input);
    }, 
}

export const Radio: Story = {
    args:{
        type: "radio",
        onChange: action('radio clicked')
        
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const input = await canvas.getByRole('radio')
      await userEvent.click(input);
    }, 
}

