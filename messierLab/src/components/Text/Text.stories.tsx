import {Meta, StoryObj} from "@storybook/react";
import {Text, TextProps} from ".";

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: "Lorem impsum dolor",
        size: "lg"
    },
} as Meta<TextProps>;

export const Default: StoryObj = {};