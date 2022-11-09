import React from "react";
import Quote from "./Quote";

export default {
  title: "Example/Quote",
  component: Quote,
};
const Template = (args) => <Quote {...args} />;

export const MyQuote = {
  args: {
    alignment: "to_center",
    content:
      "Don't try to be original. Just try to be good... \n Vel repudiandae aspernatur et labore voluptates qui ratione adipisci et atque voluptatum. Et unde dolores aut rerum pariatur ut consequatur tempora aut totam ipsum.",
    size: "like-p",
  },
};
