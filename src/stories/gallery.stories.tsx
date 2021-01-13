import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Gallery } from '../components/Gallery';
import { photos } from '../testdata/photos';

// tslint:disable-next-line: no-object-literal-type-assertion
export default {
    component: Gallery,
    title: 'Components/Gallery'
} as Meta;

export const Default: Story = (): React.ReactElement => <Gallery photos={photos} loading={false} />;
export const Loading: Story = (): React.ReactElement => <Gallery photos={[]} loading={true} />;
