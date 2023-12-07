import React from 'react';
import { Story, Meta } from '@storybook/react';
import _ from 'lodash';
// @ts-ignore
import readme from './README.md';
import { PALETTE_ENUMS } from './palette.interface';
import { palette } from './palette';
export default {
    title: 'Palette',
    parameters: {
        backgrounds: {
            default: 'light',
        },
        docs: {
            description: {
                // component: readme,
            },
        },
    },
} as Meta;

const Template2: Story<any> = (args) => (
    <div className="stories-colors-block">
        {Object.values(PALETTE_ENUMS).map((key: any) =>
            typeof key !== 'number' ? (
                <div className="stories-icon-text">
                    <div
                        className="stories-colors-item"
                        key={key}
                        style={{ background: palette[key] }}
                    >
                        <small className="stories-colors-text">{key}</small>
                        <small className="stories-colors-text">
                            {palette[key]}
                        </small>
                        <div {...args} icon={key} />
                    </div>
                </div>
            ) : (
                ''
            )
        )}
    </div>
);

export const Palette_ = Template2.bind({});
