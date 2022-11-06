import React from 'react';
import Avatar from './Avatar';

export default {
    title: 'Example/Avatar',
    component: Avatar,
};
const Template = (args) => <Avatar {...args} />;

export const MyAvatar = {
    args: {
        emoji: 'cat',
        type: 'circle',
        size: 'medium'
    },
};


