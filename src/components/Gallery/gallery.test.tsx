import React from 'react';

import { Photo } from '../../@types/photo';
import { photos } from '../../testdata/photos';

import { Gallery } from '.';
import GalleryObject from './gallery-object';

describe('Gallery', (): void => {
    const aGallery = (data: Photo[], loading: boolean): React.ReactElement => <Gallery photos={data} loading={loading} />;

    it('should render without crashing', (): void => {
        const gallery = new GalleryObject(aGallery([], true));
        expect(gallery.exists()).toBeTruthy();
    });

    it('should render spinner when photos are loading', (): void => {
        const gallery = new GalleryObject(aGallery([], true));
        expect(gallery.spinner()).toBeTruthy();
        expect(gallery.photos()).toBeFalsy();
    });

    it('should render photos when data has loaded', (): void => {
        const gallery = new GalleryObject(aGallery(photos, false));
        expect(gallery.spinner()).toBeFalsy();
        expect(gallery.photos()).toBeTruthy();
        photos.forEach((photo: Photo): void => {
            expect(gallery.photo(photo.id)).toBeTruthy();
        });
    });
});
