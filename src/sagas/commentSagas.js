// @flow
import { call, put } from 'redux-saga/effects';
import { delay, takeEvery } from 'redux-saga';

import type { ReduxAction } from 'lib/types';
import apiGet from 'lib/apiGet';

import * as actions from '../actions/commentActions';
import actionTypes from '../actionTypes/commentActionTypes';

/* Tasks */
type FetchDataRetType = Generator<{CALL: delay}|{PUT: ReduxAction}, void, void>;
export function* fetchData(): FetchDataRetType {
  try {
    const response = yield call(apiGet);
    yield put(actions.fetchSucceeded(response));
  } catch (e) {
    yield put(actions.fetchFailed(e.message));
  }
}

/* Watchers */
type WatchFetchDataRetType = Generator<Generator<any, any, any>, void, void>;
export function* watchFetchData(): WatchFetchDataRetType {
  yield* takeEvery(actionTypes.fetchData, fetchData);
}
