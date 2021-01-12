import React from 'react';

import NavBar from '.';
import NavBarObject from './navbar-object';

describe('NavBar', (): void => {
    const fakeTitle = 'Title';

    const messages = {
        'app.navbar.title': fakeTitle
    };

    const aNavBar = (): React.ReactElement => <NavBar />;

    it('should render without crashing', (): void => {
        const navbar = new NavBarObject(aNavBar(), messages);
        expect(navbar.exists()).toBeTruthy();
    });

    it('should render navbar brand', (): void => {
        const navbar = new NavBarObject(aNavBar(), messages);
        expect(navbar.navbarTitle()).toBe(fakeTitle);
    });
});
