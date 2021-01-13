import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import { locale, messages } from '../i18n';
import store from '../store';

export const appendIntlProvider = (children: React.ReactElement, i18n?: Record<string, string>, localeZone: string = 'en'): React.ReactElement => {
    return (
        <IntlProvider locale={localeZone} messages={i18n}>
            {children}
        </IntlProvider>
    );
};

export const appendReduxStoreProvider = (children: React.ReactElement): React.ReactElement => <Provider store={store}>{children}</Provider>;

export const appendRealProviders = (children: React.ReactElement): React.ReactElement => {
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Provider store={store}>{children}</Provider>
        </IntlProvider>
    );
};
