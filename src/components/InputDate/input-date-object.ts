import { fireEvent, render, RenderResult } from '@testing-library/react';

export default class InputDateObject {
    private readonly rendered: RenderResult;

    constructor(component: React.ReactElement) {
        this.rendered = render(component);
    }

    exists(): HTMLElement {
        return this.inputDate();
    }

    input(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-date-input-element');
    }

    changeInput(text: string): void {
        fireEvent.change(this.input(), { target: { value: text } });
    }

    private inputDate(): HTMLElement {
        return this.rendered.getByTestId('mars-rover-date-input');
    }
}
