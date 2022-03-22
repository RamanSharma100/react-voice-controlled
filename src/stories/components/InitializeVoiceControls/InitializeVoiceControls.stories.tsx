import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InitializeVoiceControls } from "./InitializeVoiceControls";

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

export const EnableNavigationControls = Template.bind({});

EnableNavigationControls.args = {
  enableNavigationControls: true,
  routes: ["/", "/about", "/contact"],
  commands: {
    navigation: ["go to", "navigate to"],
  },
};

EnableNavigationControls.argTypes = {
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
