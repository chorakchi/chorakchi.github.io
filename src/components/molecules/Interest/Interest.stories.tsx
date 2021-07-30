import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Interest } from "./Interest";

export default {
  title: "Molecules/Interest",
  component: Interest,
} as ComponentMeta<typeof Interest>;

const Template: ComponentStory<typeof Interest> = (args) => (
  <Interest {...args} />
);

export const Interest_ = Template.bind({});
Interest_.args = { children: "01" };
