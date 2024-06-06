import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TeamCard from "./TeamCard";

const meta: Meta<typeof TeamCard> = {
  title: "Smakchet/Molecules/TeamCard",
  component: TeamCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TeamCard>;
export const Age_Teamuirement: Story = {
}
