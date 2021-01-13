import { render, RenderResult } from '@testing-library/react';

export default class GalleryObject {
    private readonly rendered: RenderResult;

    constructor(component: React.ReactElement) {
        this.rendered = render(component);
    }

    exists(): HTMLElement {
        return this.gallery();
    }

    private gallery(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-photos-gallery');
    }
}
