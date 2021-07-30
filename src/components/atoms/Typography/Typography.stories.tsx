import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "./Typography";

export default {
  title: "Example/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Typography_ = Template.bind({});
Typography_.args = {children:'hi',
bold: true,
variant: 'body',
};
