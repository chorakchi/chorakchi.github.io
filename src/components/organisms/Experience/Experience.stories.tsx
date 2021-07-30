import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Experience.mock";

import { Experience } from "./Experience";

export default {
  title: "Organisms/Experience",
  component: Experience,
} as ComponentMeta<typeof Experience>;

const Template: ComponentStory<typeof Experience> = (args) => <Experience {...args} />;

export const Experience_ = Template.bind({});
Experience_.args = mockData;
