import React from "react";
import TextField from "./TextField";

export default {
  title: "Example/TextField",
  component: TextField,
};
const Template = (args) => <TextField {...args} />;

export const MyTextField = Template.bind({});
MyTextField.args = {
  label: "Lorem ipsum dolor sit amet. Non earum exercitationem qui amet omnis ut quia...",
};
