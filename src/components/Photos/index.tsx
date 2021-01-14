import React from 'react';
import { CardColumns } from 'react-bootstrap';

import { Photo } from '../../@types/photo';
import PhotoCard from '../PhotoCard';

interface Props {
    photos: Photo[];
}

export default function Photos(props: Props): React.ReactElement {
    return (
        <CardColumns data-testid="mars-rover-photos">
            {props.photos.map(
                (photo: Photo): React.ReactElement => (
                    <PhotoCard key={photo.id} photo={photo} />
                )
            )}
        </CardColumns>
    );
}
