import { Photo } from '../../../@types/photo';
import { fetchMarsPhotos } from '../../../services/mars-photos';
import { AppThunk } from '../index';

import * as types from './types';

export const loadAllMarsPhotos = (): AppThunk => {
    return async (dispatch: types.Dispatch): Promise<void> => {
        dispatch({ type: types.LOAD_ALL_MARS_PHOTOS });

        try {
            const photos: Photo[] = (await (await fetchMarsPhotos()).json()).photos;

            dispatch({ type: types.LOAD_ALL_MARS_PHOTOS_SUCCESS, photos });
        } catch (error) {
            dispatch({ type: types.LOAD_ALL_MARS_PHOTOS_FAILED, error: error.message });
        }
    };
};
