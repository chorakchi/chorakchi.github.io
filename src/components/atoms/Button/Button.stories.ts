import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import ReadmeContent from './README.md';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
          component: ReadmeContent,
      },
  },

  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Object>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contained: Story = {
  args: {
    variant: 'contained',
    label: 'Button',
    m: 1
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
