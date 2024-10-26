import React from "react"
import type { Meta, StoryObj } from "@storybook/react";
import { InputDate } from "./InputDate";
import { action } from "@storybook/addon-actions";
import { userEvent,within } from "@storybook/test";

const meta: Meta<typeof InputDate> = {
  title: "Smakchet/Atoms/InputDate",
  component: InputDate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputDate>;

export const Date: Story = {
    args:{
       onchange: action('Date inputted'),
       id:'1',
       placeholder: 'date'
    },
    // play: async ({canvasElement})=>{
    //     const canvas = within(canvasElement)
    //     const date = await canvas.getByPlaceholderText('date')
    //     await userEvent.
    // }
  
}

