import { StatusCodes } from 'http-status-codes';
import { GlobalWithFetchMock } from 'jest-fetch-mock/types';

import { fetchMarsPhotos } from './mars-photos';

const customGlobal: GlobalWithFetchMock = global as any;
// tslint:disable-next-line: no-var-requires
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

describe('Mars photos API service', (): void => {
    const fakePayload = { photos: [{ id: 30 }] };
    const date = '2021-01-05';

    beforeEach((): void => {
        customGlobal.fetch.resetMocks();
    });

    it('should fetch rover curiosity photos as default value', async (): Promise<void> => {
        customGlobal.fetch.mockResponse(JSON.stringify(fakePayload));

        await fetchMarsPhotos(date);

        expect(customGlobal.fetch.mock.calls.length).toEqual(1);
        expect(customGlobal.fetch.mock.calls[0][0]).toEqual(
            'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-01-05&api_key=C4rhE3Yzc0jeVBPObgfySnfezSWThrNyod00sPS8'
        );
    });

    it('should throw error if enabled by default', async (): Promise<void> => {
        const errorMessage = 'error thrown';
        customGlobal.fetch.mockResponse('', { status: StatusCodes.NOT_FOUND, statusText: errorMessage });

        await expect(fetchMarsPhotos(date)).rejects.toThrow(errorMessage);
    });

    it('should throw error if enabled specifically', async (): Promise<void> => {
        const errorMessage = 'error thrown';
        customGlobal.fetch.mockResponse('', { status: StatusCodes.NOT_FOUND, statusText: errorMessage });

        await expect(fetchMarsPhotos(date, undefined, true)).rejects.toThrow(errorMessage);
    });
});
