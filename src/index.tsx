import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import { locale, messages } from './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import App from './App';

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages[locale]}>
        <Provider store={store}>
            <App />
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
