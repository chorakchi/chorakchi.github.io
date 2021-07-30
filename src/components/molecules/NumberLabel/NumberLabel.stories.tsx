import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NumberLabel } from "./NumberLabel";

export default {
  title: "Molecules/NumberLabel",
  component: NumberLabel,
} as ComponentMeta<typeof NumberLabel>;

const Template: ComponentStory<typeof NumberLabel> = (args) => (
  <NumberLabel {...args} />
);

export const Section_ = Template.bind({});
Section_.args = { children: "01" };
