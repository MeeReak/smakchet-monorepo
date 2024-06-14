// src/stories/FileInput.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import FileInput from "./fileInput";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof FileInput> = {
  title: "Smakchet/Atoms/FileInput",
  component: FileInput,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FileInput>;

async function fetchFile(url: string): Promise<File> {
  const response = await fetch(url);
  const blob = await response.blob();
  const filename = url.split('/').pop() || 'image.png';
  return new File([blob], filename, { type: blob.type });
}

export const Default: Story = {
  args: {
    onChange: action('File input changed'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByLabelText('Upload Your Image');// Ensure the label text matches exactly
    const file = await fetchFile('/assets/image/ace_volunteer.png');
    
    await userEvent.upload(input, file);
  },
};


