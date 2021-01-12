import { StatusCodes } from 'http-status-codes';
import { GlobalWithFetchMock } from 'jest-fetch-mock/types';

import { Rovers } from '../@types/rover';

import { fetchMarsPhotos } from './mars-photos';

const customGlobal: GlobalWithFetchMock = global as any;
// tslint:disable-next-line: no-var-requires
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

describe('Mars photos API service', (): void => {
    const fakePayload = { photos: [{ id: 30 }] };

    beforeEach((): void => {
        customGlobal.fetch.resetMocks();
    });

    it('should fetch rover curiosity photos as default value', async (): Promise<void> => {
        customGlobal.fetch.mockResponse(JSON.stringify(fakePayload));

        await fetchMarsPhotos();

        expect(customGlobal.fetch.mock.calls.length).toEqual(1);
        expect(customGlobal.fetch.mock.calls[0][0]).toEqual(
            'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
        );
    });

    it('should fetch rover opportunity photos', async (): Promise<void> => {
        customGlobal.fetch.mockResponse(JSON.stringify(fakePayload));

        await fetchMarsPhotos(Rovers.Opportunity);

        expect(customGlobal.fetch.mock.calls.length).toEqual(1);
        expect(customGlobal.fetch.mock.calls[0][0]).toEqual(
            'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=DEMO_KEY'
        );
    });

    it('should fetch rover spirit photos', async (): Promise<void> => {
        customGlobal.fetch.mockResponse(JSON.stringify(fakePayload));

        await fetchMarsPhotos(Rovers.Spirit);

        expect(customGlobal.fetch.mock.calls.length).toEqual(1);
        expect(customGlobal.fetch.mock.calls[0][0]).toEqual('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=DEMO_KEY');
    });

    it('should throw error if enabled by default', async (): Promise<void> => {
        const errorMessage = 'error thrown';
        customGlobal.fetch.mockResponse('', { status: StatusCodes.NOT_FOUND, statusText: errorMessage });

        await expect(fetchMarsPhotos()).rejects.toThrow(errorMessage);
    });

    it('should throw error if enabled specifically', async (): Promise<void> => {
        const errorMessage = 'error thrown';
        customGlobal.fetch.mockResponse('', { status: StatusCodes.NOT_FOUND, statusText: errorMessage });

        await expect(fetchMarsPhotos(Rovers.Opportunity, undefined, true)).rejects.toThrow(errorMessage);
    });
});
