import { render, RenderResult } from '@testing-library/react';

export default class GalleryObject {
    private readonly rendered: RenderResult;

    constructor(component: React.ReactElement) {
        this.rendered = render(component);
    }

    exists(): HTMLElement {
        return this.gallery();
    }

    spinner(): HTMLElement | null {
        return this.rendered.queryByTestId('mars-rover-photos-gallery-loading');
    }

    photos(): HTMLElement | null {
        return this.rendered.queryByTestId('mars-rover-photos');
    }

    photo(id: number): HTMLElement | null {
        return this.rendered.queryByTestId(`mars-rover-photo-${id}`);
    }

    private gallery(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos-gallery');
    }
}
