import type { Preview } from "@storybook/react";
import './storybook.css';

const preview: Preview = {
  parameters: {
    viewMode: 'docs',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
