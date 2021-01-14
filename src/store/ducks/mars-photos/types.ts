import { Photo } from '../../../@types/photo';

export const LOAD_MARS_PHOTOS = 'LOAD_ALL_MARS_PHOTOS';
export const LOAD_MARS_PHOTOS_SUCCESS = 'LOAD_ALL_MARS_PHOTOS_SUCCESS';
export const LOAD_MARS_PHOTOS_FAILED = 'LOAD_ALL_MARS_PHOTOS_FAILED';

export type Action =
    | { type: typeof LOAD_MARS_PHOTOS }
    | { type: typeof LOAD_MARS_PHOTOS_SUCCESS; photos: Photo[] }
    | { type: typeof LOAD_MARS_PHOTOS_FAILED; error: string };

export type Dispatch = (action: Action) => void;

export interface State {
    loading: boolean;
    error: string | null;
    lastUpdated: number | null;
    photos: Photo[];
}

export const defaultState: State = {
    loading: false,
    error: null,
    lastUpdated: null,
    photos: []
};
