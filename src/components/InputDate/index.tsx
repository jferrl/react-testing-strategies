import React from 'react';

interface Props {
    onInput(input: string): void;
}

export default function InputDate(props: Props): React.ReactElement | null {
    const handleChange = (event: any): void => {
        props.onInput(event.target.value);
    };

    return (
        <div data-testid="mars-rover-date-input">
            <input type="text" data-testid="mars-rover-date-input-element" onChange={handleChange} />
        </div>
    );
}
