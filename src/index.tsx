import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import en_messages from './translations/en.json';
import es_messages from './translations/es.json';
import App from './App';

const locale = navigator.language.split(/[-_]/)[0];

const messages: Record<string, any> = {
    en: en_messages,
    es: es_messages
};

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Provider store={store}>
                <App />
            </Provider>
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
