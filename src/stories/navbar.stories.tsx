import { Meta, Story } from '@storybook/react';
import React from 'react';

import NavBar from '../components/NavBar';

// tslint:disable-next-line: no-object-literal-type-assertion
export default {
    component: NavBar,
    title: 'Components/NavBar'
} as Meta;

export const Default: Story = (): React.ReactElement => <NavBar />;
