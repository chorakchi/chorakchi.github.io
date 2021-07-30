import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Logo.mock";

import { Logo } from "./Logo";

export default {
  title: "Organisms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Logo_ = Template.bind({});
Logo_.args = mockData;
