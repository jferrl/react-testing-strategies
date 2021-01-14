import { Meta, Story } from '@storybook/react';
import React from 'react';

import Photos from '../components/Photos';
import { photos } from '../testdata/photos';

// tslint:disable-next-line: no-object-literal-type-assertion
export default {
    component: Photos,
    title: 'Components/Photos'
} as Meta;

export const Default: Story = (): React.ReactElement => <Photos photos={photos} />;
