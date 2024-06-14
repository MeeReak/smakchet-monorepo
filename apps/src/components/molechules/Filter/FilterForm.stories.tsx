// FilterForm.stories.tsx
import React from "react";
import { Meta,  StoryObj } from "@storybook/react";
import FilterForm from "./FilterForm";

const meta: Meta<typeof FilterForm> = {
  title: "Smakchet/Molecules/FilterForm",
  component: FilterForm,
  parameters: {
    layout: "padded",

  },
  tags: ['autodocs']
} 

export default meta

type Story = StoryObj<typeof FilterForm>

export const Default: Story = {
    parameters: {
        design: {
          type: "figma",
          url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=2642-1272&t=4MpxuxG9he3HWUwQ-4",
        },
      },

}
