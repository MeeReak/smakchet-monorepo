import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { expect } from "@storybook/test";

import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "SmakChet/Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typography",
    align: "center",
    fontSize: "h5",
    fontWeight: "normal",
    color: "black",
  },
  parameters: {
    design:{
      type: 'figma',
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5082-3753&t=ApRDS3YhtIuQqKEA-4"
    }
  }
};
