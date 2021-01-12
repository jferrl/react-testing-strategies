import { combineReducers, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import marsPhotosReducer from './mars-photos/reducers';

export const rootReducer = combineReducers({
    marsPhotosStore: marsPhotosReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
