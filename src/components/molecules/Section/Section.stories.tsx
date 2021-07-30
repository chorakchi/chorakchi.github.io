import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Section } from "./Section";

export default {
  title: "Example/Section",
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Section_ = Template.bind({});
Section_.args = {children:'hi',
heading: 'heading'
};
