import React from 'react';
import { useDispatch } from 'react-redux';

import NavBar from './components/NavBar';
import { loadAllMarsPhotos } from './store/ducks/mars-photos/actions';

export default function App(): React.ReactElement {
    const dispatch = useDispatch();
    dispatch(loadAllMarsPhotos());

    return (
        <div data-testid="mars-rover-photos-app">
            <NavBar />
        </div>
    );
}
