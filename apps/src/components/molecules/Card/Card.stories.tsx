import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from './Card';
import { CardProps } from '@/@types/card';

// Define metadata for the Card component story
const meta: Meta<typeof Card> = {
  title: 'Smakchet/Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// Define a template for the Card stories
const Template: Story<CardProps> = (args) => <Card {...args} />;

// Create a basic story for the Card component
export const Default = Template.bind({});
Default.args = {
  thumbnail: 'assets/image/volunteer.png',
  alt: 'Event Thumbnail',
  eventName: 'Sample Event',
  Date: { startDate: new Date().toISOString() },
  location: 'Phnom Penh',
  _id: '1',
  isFavorite: ['1'],
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const NotFavorite = Template.bind({});
NotFavorite.args = {
  thumbnail: 'assets/image/volunteer.png',
  alt: 'Event Thumbnail',
  eventName: 'Sample Event',
  Date: { startDate: new Date().toISOString() },
  location: 'Sample Location',
  _id: '2',
  isFavorite: [],
  isLoading: false,
};
