import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InitializeVoiceControls } from "./InitializeVoiceControls";
import { DEFAULT_SCROLLING_COMMANDS } from "../../constants";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/InitializeVoiceControls",
  component: InitializeVoiceControls,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InitializeVoiceControls>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InitializeVoiceControls> = (
  args: any
) => <InitializeVoiceControls {...args} />;

export const EnableVoiceControls = Template.bind({});

EnableVoiceControls.args = {
  enableNavigationControls: true,
  routes: ["/", "/about", "/contact"],
  enableScrollingControls: true,
  commands: {
    navigation: ["go to", "navigate to"],
    scrolling: [...DEFAULT_SCROLLING_COMMANDS],
  },
};

EnableVoiceControls.argTypes = {
  enableNavigationControls: {
    control: {
      type: "boolean",
    },
  },
  routes: {
    control: {
      type: "array",
    },
  },
  commands: {
    control: {
      type: "object",
    },
  },
};
