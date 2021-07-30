import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Expertise.mock";

import { Expertise } from "./Expertise";

export default {
  title: "Organisms/Expertise",
  component: Expertise,
} as ComponentMeta<typeof Expertise>;

const Template: ComponentStory<typeof Expertise> = (args) => <Expertise {...args} />;

export const Expertise_ = Template.bind({});
Expertise_.args = mockData;
