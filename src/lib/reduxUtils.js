// @flow
import _ from 'lodash/fp';
import { bindActionCreators } from 'redux';

import type { $$MapType } from 'lib/types';

/**
 * Convenience method for creating a Redux actionsMap. Pass an object containing your action
 * creators and the result can be put directly as the second argument to react-redux's `connect`
 * method.
 */
export const createActionsMap = (rawActionsMap: {}) => (dispatch: Function) =>
    _.mapValues((actions: {}) => bindActionCreators(actions, dispatch), rawActionsMap);

/**
 * Returns a function that returns an action creator
 */
export const makeActionCreator =
  (type: string, ...argNames: Array<string>) =>
    (...argValues: Array<any>) =>
      _.merge({ type }, _.zipObject(argNames, argValues));

/**
 * Convenience method for setting `isFetching` to true.
 */
export const setIsFetching =
  ($$state: $$MapType) =>
    $$state.set('isFetching', true);

/**
 * Convenience method for setting `isFetching` back to false and merging any entities.
 */
export const receiveEntities =
  ($$state: $$MapType, action: {entities: {}}) =>
    $$state.merge({ entities: action.entities });

/**
 * Convenience method for setting `isFetching` back to false and merging any errors.
 */
export const receiveErrors =
  ($$state: $$MapType, action: {errors: {}}) =>
    $$state.merge({ isFetching: false, errors: action.errors });

/**
 * createReducer - Create a reducer that uses the object-mapping style as opposed to a switch
 * statement for handling different action types.
 *
 * See: http://robwise.github.io/blog/using-flow-annotations-in-your-redux-reducers
 */
export const createReducer = ($$initialState: $$MapType, handlers: {}) =>
  ($$state: $$MapType = $$initialState, action: { type: string }): $$MapType =>
    (
      _.has(action.type, handlers)
        ? handlers[action.type]($$state, action)
        : $$state
    );
