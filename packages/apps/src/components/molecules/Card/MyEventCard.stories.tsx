import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import MyEventCard from "./MyEventCard";

import Image from "next/image";

const meta: Meta<typeof MyEventCard> = {
  title: "Smakchet/Molecules/MyEventCard",
  component: MyEventCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MyEventCard>;
export const Default: Story = {
  args: {
  
      src: "/assets/image/close-up-volunteer-holding-box-with-food.jpg",
      alt: "National day of Science Technology and Innovation 2024",
      title: "National day of Science Technology and Innovation 2024",
      date: "Mar 03 2024",
      location: "Phnom Penh",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const mycard = await canvas.getByText('National day of Science Technology and Innovation 2024');
    await userEvent.hover(mycard);
  },

};
