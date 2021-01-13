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

    private app(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos-app');
    }
}
