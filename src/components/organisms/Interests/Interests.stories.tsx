import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Interests.mock";

import { Interests } from "./Interests";

export default {
  title: "Organisms/Interests",
  component: Interests,
} as ComponentMeta<typeof Interests>;

const Template: ComponentStory<typeof Interests> = (args) => <Interests {...args} />;

export const Interests_ = Template.bind({});
Interests_.args = mockData;
