import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Reference.mock";

import { Reference } from "./Reference";

export default {
  title: "Organisms/Reference",
  component: Reference,
} as ComponentMeta<typeof Reference>;

const Template: ComponentStory<typeof Reference> = (args) => (
  <Reference {...args} />
);

export const Reference_ = Template.bind({});
Reference_.args = mockData;
