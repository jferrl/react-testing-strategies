import React from 'react';

import { Gallery } from '.';
import GalleryObject from './gallery-object';

describe('Gallery', (): void => {
    const aGallery = (): React.ReactElement => <Gallery photos={[]} loading={true} />;

    it('should render without crashing', (): void => {
        const navbar = new GalleryObject(aGallery());
        expect(navbar.exists()).toBeTruthy();
    });
});
