import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./Home.mock";

import { Home } from "./Home";

export default {
  title: "templates/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Home_ = Template.bind({});
Home_.args = mockData;
