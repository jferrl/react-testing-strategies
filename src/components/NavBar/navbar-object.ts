import { render, RenderResult } from '@testing-library/react';

import { appendIntlProvider } from '../../infrastructure_tests/providers';

export default class NavBarObject {
    private readonly rendered: RenderResult;

    constructor(component: React.ReactElement, messages?: Record<string, string>) {
        this.rendered = render(appendIntlProvider(component, messages));
    }

    exists(): HTMLElement {
        return this.navbar();
    }

    navbarTitle(): string | null {
        return this.brand().textContent;
    }

    private brand(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos-navbar-brand');
    }

    private navbar(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos-navbar');
    }
}
