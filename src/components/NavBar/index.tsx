import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default function NavBar(): React.ReactElement {
    return (
        <Navbar bg="primary" variant="dark" data-testid="mars-rover-photos-navbar">
            <Navbar.Brand href="#" data-testid="mars-rover-photos-navbar-brand">
                <FormattedMessage id="app.navbar.title" />
            </Navbar.Brand>
        </Navbar>
    );
}
