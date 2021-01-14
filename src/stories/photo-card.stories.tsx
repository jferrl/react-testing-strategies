import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Photo } from '../@types/photo';
import PhotoCard from '../components/PhotoCard';

const photo: Photo = {
    id: 102693,
    sol: 1000,
    camera: { id: 20, name: 'FHAZ', rover_id: 5, full_name: 'Front Hazard Avoidance Camera' },
    img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
    earth_date: '2015-05-30',
    rover: { id: 5, name: 'Curiosity', landing_date: '2012-08-06', launch_date: '2011-11-26', status: 'active' }
};

// tslint:disable-next-line: no-object-literal-type-assertion
export default {
    component: PhotoCard,
    title: 'Components/PhotoCard'
} as Meta;

export const Default: Story = (): React.ReactElement => <PhotoCard photo={photo} />;
