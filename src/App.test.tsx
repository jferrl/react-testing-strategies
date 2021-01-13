import React from 'react';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import AppObject from './app-object';
import App from './App';

describe('App', (): void => {
    const anApp = (): React.ReactElement => <App />;

    it('should render without crashing', (): void => {
        const navbar = new AppObject(anApp());
        expect(navbar.exists()).toBeTruthy();
    });
});
