import { GlobalWithFetchMock } from 'jest-fetch-mock';
import createMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadAllMarsPhotos } from './actions';
import { defaultState, LOAD_ALL_MARS_PHOTOS, LOAD_ALL_MARS_PHOTOS_FAILED, LOAD_ALL_MARS_PHOTOS_SUCCESS } from './types';

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

const customGlobal: GlobalWithFetchMock = global as any;
// tslint:disable-next-line: no-var-requires
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

describe('store', (): void => {
    const buildStore = (): MockStoreEnhanced<unknown> => mockStore({ marsPhotosStore: defaultState });
    const fakePhotos = [{ id: 40 }];

    beforeEach((): void => {
        customGlobal.fetchMock.resetMocks();
    });

    it('load all mars photos', async (): Promise<void> => {
        const photos: any = { photos: fakePhotos };

        customGlobal.fetch.mockResponse(JSON.stringify(photos));

        const expectedActions = [
            { type: LOAD_ALL_MARS_PHOTOS },
            {
                photos: fakePhotos,
                type: LOAD_ALL_MARS_PHOTOS_SUCCESS
            }
        ];

        const store = buildStore();

        await store.dispatch(loadAllMarsPhotos() as any);
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('load all mars photos throw an error', async (): Promise<void> => {
        const errorMessage = 'fake_error';
        customGlobal.fetch.mockReject(new Error(errorMessage));

        const expectedActions = [
            { type: LOAD_ALL_MARS_PHOTOS },
            {
                error: errorMessage,
                type: LOAD_ALL_MARS_PHOTOS_FAILED
            }
        ];

        const store = buildStore();

        await store.dispatch(loadAllMarsPhotos() as any);
        expect(store.getActions()).toEqual(expectedActions);
    });
});
