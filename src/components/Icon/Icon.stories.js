import React from 'react';
import Icon from './Icon';

export default {
    title: 'Example/Icon',
    component: Icon,
};
const Template = (args) => <Icon {...args} />;

export const MyIcon = {
    args: {
        type: 'beer',
        color: 'grey',
        size: 'medium'
    },
};


