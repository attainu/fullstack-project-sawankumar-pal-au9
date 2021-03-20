import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/mainReducer';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

const store = createStore(reducer, applyMiddleware(promiseMiddleware, logger));

export default store;