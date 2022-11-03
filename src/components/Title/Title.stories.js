import React from 'react';
import Title from './Title';

export default {
    title: 'Example/Title',
    component: Title,
};
const Template = (args) => <Title {...args} />;

export const MyTitle = {
    description: 'Change between h1-h6',
    args: {
        headingLevel: 1,
        label: 'My fancy title',
        alignment: 'to_center',
        bordered: true
    },
};
