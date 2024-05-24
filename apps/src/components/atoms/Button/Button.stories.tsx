// src/stories/Button.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

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
    onClickParam: { action: "clicked with param" },
  },
};

export default meta;

// Define a template for the Button stories
type Story = StoryObj<ButtonProps>;


// Create various stories for the Button component
export const Primary: Story = {
  args: {

    colorScheme: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    colorScheme: 'secondary',
    children: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    colorScheme: 'Success',
    children: 'Success Button',
  },
};

export const Error: Story = {
  args: {
    colorScheme: 'Error',
    children: 'Error Button',
  },
};

export const Warning: Story = {
  args: {
    colorScheme: 'Warning',
    children: 'Warning Button',
  },
};

export const WithIcons: Story = {
  args: {
    leftIcon: <span>🔍</span>,
    rightIcon: <span>✔️</span>,
    children: 'Button with Icons',
  },
};

export const Rounded: Story = {
  args: {
    round: 'full',
    children: 'Rounded Button',
  },
};

export const Large: Story = {
  args: {
    size: 'h1',
    children: 'Large Button',
  },
};

export const WithTopBottomIcons: Story = {
  args: {
    topIcon: <span>🔝</span>,
    children: 'Button with Top and Bottom Icons',
    bottomIcon: <span>🔻</span>,
  },
};
