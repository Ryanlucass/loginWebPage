import {Meta, StoryObj} from "@storybook/react";
import {Title, TittleProps} from ".";

export default {
    title: "Components/Title",
    component: Title,
    args: {
        children: "Lorem impsum dolor",
        size: "xxl"
    },
} as Meta<TittleProps>;

export const Default: StoryObj = {};