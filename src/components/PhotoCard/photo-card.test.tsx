import React from 'react';

import { photos } from '../../testdata/photos';

import PhotoCard from '.';
import PhotoCardObject from './photo-card-object';

describe('PhotoCard', (): void => {
    const photo = photos[0];
    const aPhotoCard = (): React.ReactElement => <PhotoCard photo={photo} />;

    it('should render without crashing', (): void => {
        const photoCard = new PhotoCardObject(aPhotoCard(), photo.id);
        expect(photoCard.exists()).toBeTruthy();
    });

    it('should render the card img', (): void => {
        const photoCard = new PhotoCardObject(aPhotoCard(), photo.id);
        expect(photoCard.img()).toBeTruthy();
    });

    it('should render the card body', (): void => {
        const photoCard = new PhotoCardObject(aPhotoCard(), photo.id);
        expect(photoCard.title()).toBe(`Curiosity: ${photo.id}`);
        expect(photoCard.earthDate()).toBe(photo.earth_date);
        expect(photoCard.cameraName()).toBe(photo.camera.name);
    });
});
