import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { CategoryGroup } from "./CategoryGroup";
import { action } from '@storybook/addon-actions';
import { userEvent, waitFor, within } from "@storybook/test";

const meta: Meta<typeof CategoryGroup> = {
  title: "Smakchet/Molecules/CategoryGroup",
  component: CategoryGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    setFiltered: { action: 'setFiltered' },
    setCate: { action: 'setCate' }
  },
  tags: ["autodocs"],
};

export default meta;

const Template: Story<typeof CategoryGroup> = (args) => {
  const [filtered, setFiltered] = useState(args.filtered);

  const handleSetFiltered = (index: number) => {
    setFiltered(index);
    args.setFiltered(index);
  };

  const handleSetCate = (cate: string) => {
    args.setCate(cate);
  };

  return (
    <CategoryGroup
      setFiltered={handleSetFiltered}
      filtered={filtered}
      setCate={handleSetCate}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  setFiltered: action('setFiltered') as (index: number) => void,
  filtered: 0,
  setCate: action('setCate') as (cate: string) => void,
};
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const SelectedCategory = Template.bind({});
SelectedCategory.args = {
  setFiltered: action('setFiltered') as (index: number) => void,
  filtered: 3, // Assume 'Workshop' is at index 3
  setCate: action('setCate') as (cate: string) => void,
};
SelectedCategory.play= async ({canvasElement})=>{
  const canvas = within(canvasElement)
  const selectall = canvas.getByText('All');
  const selecteducation = canvas.getByText('Education');
  const selectworkshop = canvas.getByText('Workshop');
  const selectenvironmental = canvas.getByText('Environmental');
  const selectcharity = canvas.getByText('Charity');
  const selectsport = canvas.getByText('Sport');
  const selecttechnology = canvas.getByText('Technology');
  const selectmusic = canvas.getByText('Music');
  const selectart = canvas.getByText('Art');
  const selectfood = canvas.getByText('Food');

  await userEvent.click(selectall)
  await delay(500)
  await userEvent.click(selecteducation)
  await delay(500)
  await userEvent.click(selectworkshop)
  await delay(500)
  await userEvent.click(selectenvironmental)
  await delay(500)
  await userEvent.click(selectcharity)
  await delay(500)
  await userEvent.click(selectsport)
  await delay(500)
  await userEvent.click(selecttechnology)
  await delay(500)

  await userEvent.click(selectmusic)
  await delay(500)

  await userEvent.click(selectart)
  await delay(500)

  await userEvent.click(selectfood)
  await delay(500) 

}

// export const ScrollableCategoryGroup = Template.bind({});
// ScrollableCategoryGroup.args = {
//   setFiltered: action('setFiltered') as (index: number) => void,
//   filtered: 0,
//   setCate: action('setCate') as (cate: string) => void,
// };
// ScrollableCategoryGroup.decorators = [
//   (Story) => (
//     <div style={{ width: '500px' }}>
//       <Story />
//     </div>
//   ),
// ];
// ScrollableCategoryGroup.play =async({canvasElement})=>{
//   const canvas = within(canvasElement)
//   const scrollRightButton = await waitFor(() => canvas.getByRole('button', {}));

//   await userEvent.click(scrollRightButton);
//   await delay(500); // Delay for 500ms
// }
