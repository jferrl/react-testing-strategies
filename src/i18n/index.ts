import en_messages from './en.json';
import es_messages from './es.json';

export const locale = navigator.language.split(/[-_]/)[0];

export const messages: Record<string, any> = {
    en: en_messages,
    es: es_messages
};
