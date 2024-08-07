import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    '@storybook/addon-docs',
    "@storybook/addon-interactions",
    '@storybook/addon-actions',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
