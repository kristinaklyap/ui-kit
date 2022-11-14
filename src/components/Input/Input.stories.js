import React from "react";
import Input from "./Input";

export default {
  title: "Example/Input",
  component: Input,
};
const Template = (args) => <Input {...args} />;

export const MyInput = Template.bind({});
MyInput.args = {
  name: "username",
  label: "Your name",
  errorLabel: "Input cannot be empty.",
  sample: "Joe",
};
