// src/stories/Button.stories.tsx
import React, { act } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon";
import Image from "next/image";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/test";
// Define metadata for the Button component story
const meta: Meta<typeof ButtonIcon> = {
  title: "Smakchet/Atoms/ButtonIcon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onclick: { action: "clicked" },
  },
};

export default meta;

// Define a template for the Button stories
type Story = StoryObj<typeof ButtonIcon>;

// Create various stories for the Button component

export const Add: Story = {
  args: {
    icon: (
      <Image src={"assets/icons/add.svg"} alt={"add"} width={15} height={15} />
    ),
    className: "bg-gray-200 !w-[44px] !h-[44px]",
    onclick: action("Add is clicked"),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2814&t=GGQaDzcQSyxxxY7X-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonIcon = await canvas.getByRole('button');
    await userEvent.click(buttonIcon);
  },
};

export const Favorite: Story = {
  args: {
    icon: (
      <Image
        src={"assets/icons/heart.svg"}
        alt={"add"}
        width={15}
        height={15}
      />
    ),
    className: "bg-gray-200 !w-[44px] !h-[44px]",
    onclick: action('favorite is clicked')
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2815&t=GGQaDzcQSyxxxY7X-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonIcon = await canvas.getByRole('button');
    await userEvent.click(buttonIcon);
  },
};

export const Notification: Story = {
  args: {
    icon: (
      <Image
        src={"assets/icons/noti.svg"}
        alt={"notification"}
        width={18}
        height={14}
      />
    ),
    className: "bg-gray-200 !w-[44px] !h-[44px]",
    onclick: action('notification is clicked')
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2816&t=GGQaDzcQSyxxxY7X-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonIcon = await canvas.getByRole('button');
    await userEvent.click(buttonIcon);
  }, 
};

export const Profile: Story = {
  args: {
    icon: (
      <Image
        src={"assets/icons/profile.svg"}
        alt={"prfile"}
        width={44}
        height={44}
      />
    ),
    className: "bg-gray-200 !w-[44px] !h-[44px]",
    onclick: action('profile is clicked')
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonIcon = await canvas.getByRole('button');
    await userEvent.click(buttonIcon);
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2813&t=nSKN6CQQnUmwIRyy-4",
    },
  },
};
