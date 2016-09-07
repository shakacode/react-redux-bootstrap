// @flow
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import createLoggerMiddleware from 'redux-logger';
import _ from 'lodash/fp';

import rootReducer, { rootInitialState } from './reducers';
import rootSaga from './sagas';

const middlewares = [];

export const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// LOGGER MUST BE LAST IN MIDDLEWARES CHAIN
if (process.env.NODE_ENV !== 'production') {
  // Convert Immutable.js stores to native JS so that they may be logged by redux-logger
  const stateTransformer = _.mapValues((store: {}) => (store.toJS ? store.toJS() : store));

  const loggerMiddleware = createLoggerMiddleware({ stateTransformer });
  middlewares.push(loggerMiddleware);
}

export default createStore(
  rootReducer,
  rootInitialState,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
