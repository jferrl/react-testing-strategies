import { render, RenderResult } from '@testing-library/react';

export default class PhotoCardObject {
    private readonly rendered: RenderResult;

    constructor(component: React.ReactElement, private readonly photoId: number) {
        this.rendered = render(component);
    }

    exists(): HTMLElement {
        return this.photoCard();
    }

    img(): HTMLElement {
        return this.rendered.getByTestId(`mars-rover-photo-${this.photoId}-img`);
    }

    title(): string | null {
        return this.rendered.getByTestId(`mars-rover-photo-${this.photoId}-title`).textContent;
    }

    earthDate(): string | null {
        return this.rendered.getByTestId(`mars-rover-photo-${this.photoId}-earth_date`).textContent;
    }

    cameraName(): string | null {
        return this.rendered.getByTestId(`mars-rover-photo-${this.photoId}-camera-name`).textContent;
    }

    private photoCard(): HTMLElement {
        return this.rendered.getByTestId(`mars-rover-photo-${this.photoId}`);
    }
}
