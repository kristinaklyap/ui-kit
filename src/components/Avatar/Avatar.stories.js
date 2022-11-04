import React from 'react';
import Avatar from './Avatar';

export default {
    title: 'Example/Avatar',
    component: Avatar,
};
const Template = (args) => <Avatar {...args} />;

export const MyAvatar = {
    description: 'Change between h1-h6',
    args: {
        emoji: 'cat',
        type: 'circle',
        size: 'medium'
    },
};


