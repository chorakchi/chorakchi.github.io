import React from 'react';
import { Story, Meta } from '@storybook/react';
import _ from 'lodash';
// @ts-ignore
import readme from './README.md';
import { PALETTE_ENUMS } from './palette.interface';
import { space } from './space';
export default {
    title: 'Space',
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
    <div>
        {Object.keys(space).map((key: any) =>
            typeof key !== 'number' ? (
                <div>
                    <div
                        key={key}
                        style={{
                            background: 'lightgray',
                            margin: 10,
                            height: space[key],
                            width: space[key],
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <small>
                            {key} - {space[key]}
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

export const Space_ = Template2.bind({});
