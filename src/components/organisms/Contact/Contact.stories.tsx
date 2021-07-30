import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Contact.mock";

import { Contact } from "./Contact";

export default {
  title: "Organisms/Contact",
  component: Contact,
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => (
  <Contact {...args} />
);

export const Contact_ = Template.bind({});
Contact_.args = mockData;
