import React from 'react';

import { Photo } from '../../@types/photo';
import { photos } from '../../testdata/photos';

import Photos from '.';
import PhotosObject from './photos-object';

describe('Photos', (): void => {
    const aPhotos = (): React.ReactElement => <Photos photos={photos} />;

    it('should render without crashing', (): void => {
        const photosComponent = new PhotosObject(aPhotos());
        expect(photosComponent.exists()).toBeTruthy();
    });

    it('should not render an invalid photo', (): void => {
        const photosComponent = new PhotosObject(aPhotos());
        const photoId = 1000000000;
        expect(photosComponent.photo(photoId)).toBeFalsy();
    });

    it('should render each photo of the gallery', (): void => {
        const photosComponent = new PhotosObject(aPhotos());
        photos.forEach((photo: Photo): void => {
            expect(photosComponent.photo(photo.id)).toBeTruthy();
        });
    });
});
