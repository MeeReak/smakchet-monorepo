import React, { act } from "react"
import type { Meta, StoryObj } from "@storybook/react";
import { InputSearch } from "./InputSearch";
import { action } from "@storybook/addon-actions";
import { userEvent,within } from "@storybook/test";

const meta: Meta<typeof InputSearch> = {
  title: "Smakchet/Atoms/InputSearch",
  component: InputSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputSearch>;

export const Date: Story = {
    args:{
      onChange: action('seach')
    },
    play: async ({canvasElement})=>{
        const canvas = within(canvasElement)
        const search = await canvas.getByPlaceholderText('Search')
        await userEvent.type(search, 'event1')
    }
  
}

