// @flow
import { assert } from 'lib/testUtils';
import { call, put } from 'redux-saga/effects';

import * as commentActions from '../actions/commentActions';
import { fetchData } from './commentSagas';

describe('commentSagas', () => {
  describe('fetchData', () => {
    const gen = fetchData();

    it('yields a call to fetch', () => {
      const actual = gen.next().value;
      const expected = call(apiGet);

      assert.deepEqual(actual, expected);
    });

    it('yields a put with the fetchSucceeded action', () => {
      const actual = gen.next().value;
      const expected = put(commentActions.fetchSucceeded());

      assert.deepEqual(actual, expected);
    });
  });
});
