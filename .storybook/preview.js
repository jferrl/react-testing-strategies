import 'bootstrap/dist/css/bootstrap.min.css';

import { addDecorator } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

import en_messages from '../src/translations/en.json';
import es_messages from '../src/translations/es.json';

const messages = {
    en: en_messages,
    es: es_messages
};

const getMessages = (locale) => messages[locale];

// Set intl configuration
setIntlConfig({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    getMessages
});

// Register decorator
addDecorator(withIntl);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};
