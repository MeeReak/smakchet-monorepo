import type { Meta, StoryObj } from "@storybook/react";

import FileInput from "./fileInput";

const meta: Meta<typeof FileInput> = {
  title: "Smakchet/Atoms/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  args: {
    onChange(files) {
        
    },
  },
};
