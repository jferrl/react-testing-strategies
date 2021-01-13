import React from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Photo } from '../../@types/photo';
import { RootState } from '../../store/ducks';
import Photos from '../Photos';

interface StateProps {
    photos: Photo[];
    loading: boolean;
}

type Props = StateProps;

export function Gallery(props: Props): React.ReactElement {
    return (
        <div data-testid="mars-rover-photos-gallery" style={{ margin: 80 }}>
            {props.loading ? (
                <Spinner
                    data-testid="mars-rover-photos-gallery-loading"
                    animation="border"
                    variant="primary"
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', height: 200, width: 200 }}
                />
            ) : (
                <Photos photos={props.photos} />
            )}
        </div>
    );
}

const mapStateToProps = (state: RootState): StateProps => {
    return {
        photos: state.marsPhotosStore.photos,
        loading: state.marsPhotosStore.loading
    };
};

export default connect(mapStateToProps)(Gallery);
