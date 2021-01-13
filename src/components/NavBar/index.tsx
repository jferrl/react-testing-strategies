// tslint:disable: jsx-no-lambda
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default function NavBar(): React.ReactElement {
    return (
        <Navbar bg="light" data-testid="mars-rover-photos-navbar" fixed="top">
            <Navbar.Brand href="#" data-testid="mars-rover-photos-navbar-brand">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                    data-testid="mars-rover-photos-nasa-logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="nasa logo"
                />
                <FormattedMessage id="app.navbar.title" />
            </Navbar.Brand>
        </Navbar>
    );
}
