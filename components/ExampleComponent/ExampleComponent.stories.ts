import type { Meta, StoryObj } from "@storybook/react";

import emptyFn from "../../constants/emptyFn";

import ExampleComponent from ".";

const meta = {
  title: "Example/ExampleComponent",
  component: ExampleComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExampleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    onClick: emptyFn,
  },
};
