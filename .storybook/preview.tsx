import React from "react";
import type { Preview } from "@storybook/react";
import { AppProvider } from '@shopify/polaris';

import "@shopify/polaris/build/esm/styles.css";
import "./index.css"

const i18n = {};

const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => <AppProvider i18n={{i18n}}>
      <Story />
    </AppProvider>,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
