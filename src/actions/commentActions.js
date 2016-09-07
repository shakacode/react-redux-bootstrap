// @flow
import { makeActionCreator } from 'lib/reduxUtils';
import actionTypes from '../actionTypes/commentActionTypes';

export const fetchData = makeActionCreator(actionTypes.fetchData);
export const fetchSucceeded = makeActionCreator(actionTypes.fetchSucceeded, 'entities');
export const fetchFailed = makeActionCreator(actionTypes.fetchFailed, 'errors');
