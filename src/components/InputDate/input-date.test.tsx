import React from 'react';

import InputDate from '.';
import InputDateObject from './input-date-object';

describe('InputDate', (): void => {
    const anInputDate = (onInput: any): React.ReactElement => <InputDate onInput={onInput} />;

    it('should render without crashing', (): void => {
        const inputDate = new InputDateObject(anInputDate(jest.fn()));
        expect(inputDate.exists()).toBeTruthy();
    });

    it('should render an input element', (): void => {
        const onInput = jest.fn();
        const inputValue = 'fake_input';
        const inputDate = new InputDateObject(anInputDate(onInput));
        expect(inputDate.input()).toBeTruthy();
        inputDate.changeInput(inputValue);
        expect(onInput).toHaveBeenCalledWith(inputValue);
    });
});
