import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from './';

const rootReducer = combineReducers({
  ...reducers,
});

const middewares = [thunk, logger];

export default createStore(rootReducer, compose(applyMiddleware(...middewares)));
