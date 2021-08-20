import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import _ from 'lodash';

import { SVG } from './SVG';
import { iconList } from './iconList';

const figmaLink =
    'https://www.figma.com/file/7i7w7VdFONfkl29fgA2PIk/icons?node-id=401%3A950';

const IconsList = _(iconList)
    .groupBy((o) => o.split('_')[0])
    .map((icons, category) => ({ category, icons }))
    .value();

export default {
    title: 'atoms/SVG',
    component: SVG,
    parameters: {
        docs: {
            description: {
                component:
                    `This component make inject external SVG storraged as file into the DOM as markup inline<br/><br/>` +
                    `<h3>Icon</h3>` +
                    `Icon component desgin [(figma-link)](${figmaLink})
        <br/> <br/> <h5> icon name convention:</h5>` +
                    ' ```categoryName_specifcName_extraName ``` <br/> <br/>' +
                    `Every icon has a name, and is composed by a vector element inside a frame. <br/>
        In order to mantain consistency you should always download and use the frame that wrap the icon from Figma and copy that to icon folder that placed in: <br/>` +
                    "``` /src/public/assets/icons ``` <br/> after adding any Icon update the type and list of the icon in ```/src/core/components/atomes/SVG/icon.type.tsx &  iconList.tsx``` (Recommendation: don't copy one by one just select all file copy, paste and modify them in file) <br/><br/>" +
                    `for other SVGs(art-boeards) use this folder ` +
                    '``` /src/public/assets/images ```',
            },
        },
        backgrounds: {
            default: 'light',
        },
    },
} as Meta;

const SVGIcon: Story<any> = (args) => <SVG {...args} />;
const SVGSource: Story<any> = (args) => <SVG {...args} />;

const IconList: Story<any> = (args) => (
    <React.Fragment>
        {IconsList.map((pItem, i) => (
            <div key={'block' + i}>
                <small className="stories-icon-text-cat">
                    {_.lowerCase(pItem.category)}
                </small>
                <div className="stories-icon-block">
                    {pItem.icons.map((item) => (
                        <div className="stories-icon-item" key={item}>
                            <SVG
                                {...args}
                                name={item}
                                className="stories-icon-svg"
                            />
                            <small className="stories-icon-text">
                                {[item]}
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </React.Fragment>
);
export const SVG_ = SVGSource.bind({});
SVG_.args = {
    src: '/assets/images/backenDe.svg',
};
export const Icon_ = SVGIcon.bind({});
Icon_.args = {
    name: 'comments_chat',
    size: 'lg',
};

export const Icons = IconList.bind({});
Icons.args = {
    size: 'base',
};
