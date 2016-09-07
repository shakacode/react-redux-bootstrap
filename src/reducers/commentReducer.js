// @flow
import { fromJS } from 'immutable';

import {
  createReducer,
  setIsFetching,
  receiveEntities,
  receiveErrors,
} from 'lib/reduxUtils';
import type { $$MapType } from 'lib/types';

import actionTypes from '../actionTypes/commentActionTypes';

export const $$commentStoreInitialState = fromJS({
  name: 'Ryan',
  isFetching: false,
  errors: null,
  entities: null,
});

const handlers = {
  [actionTypes.fetchData]: setIsFetching,
  [actionTypes.fetchSucceeded]: receiveEntities,
  [actionTypes.fetchFailed]: receiveErrors,
  [actionTypes.changeName]:
    ($$state: $$MapType, action: {name: string}) => $$state.set('name', action.name),
};

export default createReducer($$commentStoreInitialState, handlers);
