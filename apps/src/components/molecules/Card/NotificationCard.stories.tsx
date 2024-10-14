import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import NotificationCard from "./NotificationCard";

const meta: Meta<typeof NotificationCard> = {
  title: "Smakchet/Molecules/NotificationCard",
  component: NotificationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NotificationCard>;
export const Default: Story = {
  args: {
    id: "2",
    title: "National day of Science, Technology and Innovation",
    image: "/assets/image/cambodia_book_fair.png",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=3397-9058&t=a2pYJUTApcxfHTDa-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const notification = await canvas.getByText(
      "National day of Science, Technology and Innovation"
    );
    await userEvent.hover(notification);
  },
};
