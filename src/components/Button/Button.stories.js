import React from 'react';
import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
};
const Template = (args) => <Button {...args} />;

export const MyButton = {
    args: {
        type: 'button--primary',
        mode: 'button--default',
        size: 'button--medium',
        shape: 'square',
        label: 'My button'
    },
};



