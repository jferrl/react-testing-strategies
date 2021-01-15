import { Meta, Story } from '@storybook/react';
import React from 'react';

import InputDate from '../components/InputDate';

// tslint:disable-next-line: no-object-literal-type-assertion
export default {
    component: InputDate,
    title: 'Components/InputDate'
} as Meta;

// tslint:disable-next-line: no-empty
const mock = (): void => {};

export const Default: Story = (): React.ReactElement => <InputDate onInput={mock} />;
