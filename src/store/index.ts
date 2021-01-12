import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { config } from '../env';

import { rootReducer } from './ducks';

const middlewares: Middleware[] = [thunk];

if (config.reduxLoggerEnabled) middlewares.push(logger);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
