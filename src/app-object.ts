import { render, RenderResult } from '@testing-library/react';

import { appendRealProviders } from './infrastructure_tests/providers';

export default class AppObject {
    private readonly rendered: RenderResult;

    constructor(component: React.ReactElement) {
        this.rendered = render(appendRealProviders(component));
    }

    exists(): HTMLElement {
        return this.app();
    }

    navbar(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos-navbar');
    }

    gallery(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos-gallery');
    }

    spinner(): HTMLElement | null {
        return this.rendered.queryByTestId('mars-rover-photos-gallery-loading');
    }

    photos(): HTMLElement | null {
        return this.rendered.queryByTestId('mars-rover-photos');
    }

    private app(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos-app');
    }
}
