import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Description.mock";

import { Description } from "./Description";

export default {
  title: "Organisms/Description",
  component: Description,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

export const Description_ = Template.bind({});
Description_.args = mockData;
