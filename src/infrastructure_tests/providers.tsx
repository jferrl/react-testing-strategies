import { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

export const appendIntlProvider = (component: ReactElement, messages?: Record<string, string>, locale: string = 'en'): ReactElement => {
    return (
        <IntlProvider locale={locale} messages={messages}>
            {component}
        </IntlProvider>
    );
};
