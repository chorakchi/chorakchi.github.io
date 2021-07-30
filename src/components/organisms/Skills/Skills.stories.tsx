import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Skills.mock";

import { Skills } from "./Skills";

export default {
  title: "Organisms/Skills",
  component: Skills,
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = (args) => <Skills {...args} />;

export const Skills_ = Template.bind({});
Skills_.args = mockData;
