import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { HostNotificationCard } from "./HostNotificationCard";

const meta: Meta<typeof HostNotificationCard> = {
  title: "Smakchet/Molecules/HostNotificationCard",
  component: HostNotificationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HostNotificationCard>;
export const Default: Story = {
  args: {
    id: "1",
    title: "Peng Maleap",
    description: "applied to your event",
    image: "/assets/image/leap.jpg",
    time: "11 hours ago",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FRi5rN0B2IiiIOSwgiPLW0/SmakChet?node-id=5643-12908&t=a2pYJUTApcxfHTDa-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const hostnotification = await canvas.getByText("applied to your event");
    await userEvent.hover(hostnotification);
  },
};
