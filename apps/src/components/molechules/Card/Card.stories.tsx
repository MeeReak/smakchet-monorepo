import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/components/molechules/Card/Card';
import  CardProvider  from '@/contexts/CardContext';
import { userEvent } from '@storybook/test';

// Define metadata for the Card component story
const meta: Meta<typeof Card> = {
  title: 'Smakchet/Molecules/Card',
  component: Card,
  decorators: [(Story) => <CardProvider><Story /></CardProvider>],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// Define a template for the Card stories
type Story = StoryObj<typeof Card>;

// Create various stories for the Card component
export const Default: Story = {
  args: {
    src: 'assets/image/volunteer.png',  // Use an image from the public/images folder
    alt: 'Placeholder Image',
    title: 'National day of Science Technology And Motivation',
    date: 'Dec 12 2024',
    location: 'Phnom Penh',
    id: '1',
    isFavorite: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=4758-21509&t=ApRDS3YhtIuQqKEA-4',
    },
  },
};

export const Favorite: Story = {
  args: {
    src: 'assets/image/volunteer.png',  // Use another image from the public/images folder
    alt: 'Placeholder Image',
    title: 'Favorite Card Title',
    date: '2023-06-01',
    location: 'Favorite Location',
    id: '2',
    isFavorite: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=4758-21509&t=ApRDS3YhtIuQqKEA-4',
    },
  },
  play: async ({ canvasElement }) => {
    const favoriteButton = canvasElement.querySelector('[data-testid="favorite-button"]');
    if (favoriteButton) {
      await userEvent.click(favoriteButton); // Simulates user clicking the button
    } else {
      console.warn("Favorite button not found");
    }
  },
};

export const WithImage: Story = {
  args: {
    src: 'assets/image/volunteer.png',  // Use an image from the public/images folder
    alt: 'Image Card',
    title: 'Card with Image',
    date: '2023-06-01',
    location: 'Image Location',
    id: '3',
    isFavorite: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=4758-21509&t=ApRDS3YhtIuQqKEA-4',
    },
  },
};

export const SkeletonCard: Story = {
  args: {
    src: '',
    alt: '',
    title: '',
    date: '',
    location: '',
    id: '4',
    isFavorite: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=6068-10026&t=a2pYJUTApcxfHTDa-4',
    },
  },
};
