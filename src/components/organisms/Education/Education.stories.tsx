import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Education.mock";

import { Education } from "./Education";

export default {
  title: "Organisms/Education",
  component: Education,
} as ComponentMeta<typeof Education>;

const Template: ComponentStory<typeof Education> = (args) => <Education {...args} />;

export const Education_ = Template.bind({});
Education_.args = mockData;
