import moment from 'moment';

import * as types from './types';

export default function marsPhotosReducer(state: types.State = types.defaultState, action: types.Action): types.State {
    switch (action.type) {
        case types.LOAD_ALL_MARS_PHOTOS: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case types.LOAD_ALL_MARS_PHOTOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                lastUpdated: moment().unix(),
                photos: action.photos
            };
        }
        case types.LOAD_ALL_MARS_PHOTOS_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}
