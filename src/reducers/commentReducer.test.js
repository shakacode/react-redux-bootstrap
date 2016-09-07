// @flow
import { assert } from 'lib/testUtils';

import commentReducer from './commentReducer';
import commentActionTypes from '../actionTypes/commentActionTypes';
import * as commentActions from '../actions/commentActions';

describe('commentReducer', () => {
  describe(commentActionTypes.changeName, () => {
    it('changes the name', () => {
      const state = undefined;
      const action = commentActions.changeName('cj');
      const actual = commentReducer(state, action).get('name');

      assert.equal(actual, 'cj');
    });
  });

  describe(commentActionTypes.fetchData, () => {
    it('sets `isFetching` to true', () => {
      const state = undefined;
      const action = commentActions.fetchData();
      const actual = commentReducer(state, action).get('isFetching');

      assert.isTrue(actual);
    });
  });

  describe(commentActionTypes.fetchSucceeded, () => {
    it('sets `isFetching` to false', () => {
      const state = undefined;
      const entities = { tpsReport: 'someData' };
      const action = commentActions.fetchSucceeded(entities);
      const actual = commentReducer(state, action);

      assert.isFalse(actual.get('isFetching'));
      assert.deepEqual(actual.get('entities').toJS(), entities);
    });
  });

  describe(commentActionTypes.fetchFailed, () => {
    it('sets `isFetching` to false and merges errors', () => {
      const state = undefined;
      const errors = { badResponse: 'server response was 404' };
      const action = commentActions.fetchFailed(errors);
      const actual = commentReducer(state, action);

      assert.isFalse(actual.get('isFetching'));
      assert.deepEqual(actual.get('errors').toJS(), errors);
    });
  });
});
