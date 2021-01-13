import React from 'react';
import { Card } from 'react-bootstrap';

import { Photo } from '../../@types/photo';

interface Props {
    photo: Photo;
}

export default function PhotoCard(props: Props): React.ReactElement {
    return (
        <Card data-testid={`mars-rover-photo-${props.photo.id}`}>
            <Card.Img variant="top" src={props.photo.img_src} data-testid={`mars-rover-photo-${props.photo.id}-img`} />
            <Card.Body>
                <Card.Title data-testid={`mars-rover-photo-${props.photo.id}-title`}>
                    {props.photo.rover.name}: {props.photo.id}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" data-testid={`mars-rover-photo-${props.photo.id}-earth_date`}>
                    {props.photo.earth_date}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted" data-testid={`mars-rover-photo-${props.photo.id}-camera-name`}>
                    {props.photo.camera.name}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}
