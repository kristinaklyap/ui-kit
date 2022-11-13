import React from "react";
import Notification from "./Notification";

export default {
  title: "Example/Notification",
  component: Notification,
};
const Template = (args) => <Notification {...args} />;

export const MyNotification = Template.bind({});
MyNotification.args = {
  type: "success",
  title: "Notification Title",
  description: "Notification Description",
  cancelConfig: {
    onClick: () => alert("Cancel btn"),
    label: "cancel",
  },
  approveConfig: {
    onClick: () => alert("Approve btn"),
    label: "Confirm",
  },
};
