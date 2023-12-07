import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import ReadmeContent from './README.md';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
          component: ReadmeContent,
      },
  },
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const box: Story = {
  args: {
    children: 'Innovative JavaScript enthusiast crafting immersive, user-centered web experiences    ',
  },
};
