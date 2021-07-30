import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Resume.mock";

import { Resume } from "./Resume";

export default {
  title: "templates/Resume",
  component: Resume,
} as ComponentMeta<typeof Resume>;

const Template: ComponentStory<typeof Resume> = (args) => <Resume {...args} />;

export const Resume_ = Template.bind({});
Resume_.args = mockData;
