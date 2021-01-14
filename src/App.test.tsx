import fetchMock, { disableFetchMocks, enableFetchMocks } from 'jest-fetch-mock';
import React from 'react';

import AppObject from './app-object';
import { photos } from './testdata/photos';
import App from './App';
import { flushPromises } from './infrastructure_tests/promises';

describe('App', (): void => {
    const anApp = (): React.ReactElement => <App />;

    beforeAll((): void => {
        enableFetchMocks();
    });

    beforeEach((): void => {
        fetchMock.resetMocks();
    });

    afterAll((): void => {
        disableFetchMocks();
    });

    it('should render without crashing', (): void => {
        fetchMock.mockResponse(JSON.stringify({ photos }));
        const app = new AppObject(anApp());
        expect(app.exists()).toBeTruthy();
    });

    it('should render navbar', (): void => {
        const app = new AppObject(anApp());
        expect(app.navbar()).toBeTruthy();
    });

    it('should render gallery', (): void => {
        const app = new AppObject(anApp());
        expect(app.gallery()).toBeTruthy();
    });

    it('should render gallery spinner when photos are loading', (): void => {
        fetchMock.mockResponse(JSON.stringify({ photos }));
        const app = new AppObject(anApp());
        expect(app.spinner()).toBeTruthy();
        expect(app.photos()).toBeFalsy();
    });

    it('should render photos when photos request has been completed', async (): Promise<void> => {
        fetchMock.mockResponse(JSON.stringify({ photos }));
        const app = new AppObject(anApp());
        await flushPromises();
        expect(app.spinner()).toBeFalsy();
        expect(app.photos()).toBeTruthy();
    });
});
