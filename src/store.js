import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './_reducer/index.js';
import promise from 'redux-promise-middleware'


const middlware = [logger, promise];

const store = createStore(reducer, applyMiddleware(...middlware));

export default store;