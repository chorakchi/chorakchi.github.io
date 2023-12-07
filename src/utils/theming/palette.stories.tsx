import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import _ from 'lodash';
import ReadmeContent from './README.md';
import { PALETTE_ENUMS } from './palette.interface';
import { palette } from './palette';
import { PaletteComp } from './PaletteComp';

const meta = {
    title: 'ColorSystem',
    component: PaletteComp,
    parameters: {
        backgrounds: {
            default: 'light',
        },
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
  } satisfies Meta<typeof PaletteComp>;
  

export default meta;
type Story = StoryObj<typeof Object>;


export const Large: Story = {
    args: {
    },
  };


