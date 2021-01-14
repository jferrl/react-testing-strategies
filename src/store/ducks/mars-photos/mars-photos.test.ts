import fetchMock, { disableFetchMocks, enableFetchMocks } from 'jest-fetch-mock';
import createMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadMarsPhotos } from './actions';
import { defaultState, LOAD_MARS_PHOTOS, LOAD_MARS_PHOTOS_FAILED, LOAD_MARS_PHOTOS_SUCCESS } from './types';

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('store', (): void => {
    const buildStore = (): MockStoreEnhanced<unknown> => mockStore({ marsPhotosStore: defaultState });
    const fakePhotos = [{ id: 40 }];
    const date = '2020-01-05';

    beforeAll((): void => {
        enableFetchMocks();
    });

    afterAll((): void => {
        disableFetchMocks();
    });

    beforeEach((): void => {
        fetchMock.resetMocks();
    });

    it('load all mars photos', async (): Promise<void> => {
        const photos: any = { photos: fakePhotos };

        fetchMock.mockResponse(JSON.stringify(photos));

        const expectedActions = [
            { type: LOAD_MARS_PHOTOS },
            {
                photos: fakePhotos,
                type: LOAD_MARS_PHOTOS_SUCCESS
            }
        ];

        const store = buildStore();

        await store.dispatch(loadMarsPhotos(date) as any);
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('load all mars photos throw an error', async (): Promise<void> => {
        const errorMessage = 'fake_error';
        fetchMock.mockReject(new Error(errorMessage));

        const expectedActions = [
            { type: LOAD_MARS_PHOTOS },
            {
                error: errorMessage,
                type: LOAD_MARS_PHOTOS_FAILED
            }
        ];

        const store = buildStore();

        await store.dispatch(loadMarsPhotos(date) as any);
        expect(store.getActions()).toEqual(expectedActions);
    });
});
