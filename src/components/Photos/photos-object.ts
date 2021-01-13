import { render, RenderResult } from '@testing-library/react';

export default class PhotosObject {
    private readonly rendered: RenderResult;

    constructor(component: React.ReactElement) {
        this.rendered = render(component);
    }

    exists(): HTMLElement {
        return this.photos();
    }

    photo(id: number): HTMLElement | null {
        return this.rendered.queryByTestId(`mars-rover-photo-${id}`);
    }

    private photos(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos');
    }
}
