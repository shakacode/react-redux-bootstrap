// @flow
import { combineReducers } from 'redux';

import $$commentStore, { $$commentStoreInitialState } from './commentReducer';

export const rootInitialState = { $$commentStore: $$commentStoreInitialState };

export default combineReducers({ $$commentStore });
