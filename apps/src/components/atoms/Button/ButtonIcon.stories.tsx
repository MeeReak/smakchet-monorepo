// src/stories/Button.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon";
import Image from "next/image";


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
        icon: <Image src={"assets/icons/add.svg"} alt={"add"} width={15} height={15}/>,
        className: "bg-gray-200 !w-[44px] !h-[44px]"
    },
    parameters: {
        design:{
          type: "figma",
          url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2814&t=GGQaDzcQSyxxxY7X-4"
        },
      }
}

export const Favorite: Story = {
    args: {
        icon: <Image src={"assets/icons/heart.svg"} alt={"add"} width={15} height={15}/>,
        className: "bg-gray-200 !w-[44px] !h-[44px]"

    },
    parameters: {
        design:{
          type: "figma",
          url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2815&t=GGQaDzcQSyxxxY7X-4"
          
        },
      }
}

export const Notification: Story = {
    args: {
        icon: <Image src={"assets/icons/noti.svg"} alt={"notification"} width={15} height={15}/>,
        className: "bg-gray-200 !w-[44px] !h-[44px]"
    },
    parameters: {
        design:{
          type: "figma",
          url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2816&t=GGQaDzcQSyxxxY7X-4"
        },
      }
}

export const Profile: Story = {
  args: {
    icon: <Image src={"assets/icons/profile.svg"} alt={"prfile"} width={44} height={44}/>,
    className: "bg-gray-200 !w-[44px] !h-[44px]"
  }
}


