import type { Preview } from "@storybook/react";
import {themes} from "@storybook/theming";
import {withThemeFromJSXProvider} from "@storybook/addon-styling";
import { GlobalStyles } from "../src/theme/global";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs:{
      theme: themes.dark
    },
  },
};

export default preview;
