import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ReqCard from "./ReqCard";

const meta: Meta<typeof ReqCard> = {
  title: "Smakchet/Molecules/ReqCard",
  component: ReqCard,
  parameters: {
    layout: "full-screen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ReqCard>;
export const Age_Requirement: Story = {
  args: {
    description: "In order to join the program you need to be at least 18 years old on the program start date.",
    imageSrc: "/assets/icons/age-icon.svg",
    title: "Minimum Age:  18 years"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5991-8112&t=a2pYJUTApcxfHTDa-4",
    },
  },
};

export const Langauge_Requirement: Story = {
  args: {
    description:"You need to speak English (basic level)",
    imageSrc:"/assets/icons/languages.svg",
    title:"Language Skills",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5991-8118&t=a2pYJUTApcxfHTDa-4",
    },
  },
};

export const Skill_Requirement: Story = {
  args: {
    description:"You need to be friendly and communication otherwise to provide customer and give them a happy moment",
    imageSrc:"/assets/icons/multiskill.svg",
    title:"Other Skills",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5991-8124&t=a2pYJUTApcxfHTDa-4",
    },
  },
};

export const Time_Requirement: Story = {
  args: {
    description:"Your helping hand will be required on Monday, Tuesday from 07:00 - 17:00",
    imageSrc:"/assets/icons/timecommit.svg",
    title:"Time Commitment",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5991-8130&t=a2pYJUTApcxfHTDa-4",
    },
  },
};
