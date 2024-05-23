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

export const Default: Story = {
  args: {
    className: "",
    
    id:"",
    name: "",
    placeholder: "username",
    type:"string",
    onChange: action("Change!"),
    
  },
};
