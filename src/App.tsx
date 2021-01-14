import React from 'react';
import { useDispatch } from 'react-redux';

import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import { loadMarsPhotos } from './store/ducks/mars-photos/actions';

export default function App(): React.ReactElement {
    const dispatch = useDispatch();
    dispatch(loadMarsPhotos('2020-01-09'));

    return (
        <div data-testid="mars-rover-photos-app">
            <NavBar />
            <Gallery />
        </div>
    );
}
