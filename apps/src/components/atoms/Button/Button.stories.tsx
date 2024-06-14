// src/stories/Button.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import Image from "next/image";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
// Define metadata for the Button component story
const meta: Meta<ButtonProps> = {
  title: "Smakchet/Atoms/Button",
  component: Button,
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
type Story = StoryObj<ButtonProps>;

// Create various stories for the Button component
export const Primary: Story = {
  args: {
    colorScheme: 'White',
    children: 'Primary Button',
    bgColor: 'primary',
    className: 'px-6 py-4 rounded-[10px]',
    onclick: action('Primary button clicked'),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2789&t=uxxnp03aGYTQQmFP-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  },
};

export const Error: Story = {
  args: {
    colorScheme: 'White',
    children: 'Button',
    bgColor: 'Error',
    className: 'px-[17px] py-[13px]',
    onclick: action('Error button clicked'),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=4802-3211&t=uxxnp03aGYTQQmFP-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  },
};

export const LeftIcons: Story = {
  args: {
    leftIcon: <Image src={"google.svg"} alt={""} width={20} height={20} />,
    children: 'Button with Left Icon',
    className: "p-4",
    onclick: action('Left icons button clicked'),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2821&t=uxxnp03aGYTQQmFP-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  },
};

export const RightIcons: Story = {
  args: {
    rightIcon: <Image src={"assets/icons/profile-bold.svg"} alt={""} width={20} height={20} />,
    children: 'Button with Right Icon',
    className: "w-[250px] h-[75px] !flex !flex-row !justify-between items-center",
    onclick: action('Right icons button clicked'),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5144-2797&t=uxxnp03aGYTQQmFP-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  },
};
