// @flow
import { createSelector } from 'reselect';

import type { $$MapType } from 'lib/types';

const commentStoreSelector = (state: {$$commentStore: $$MapType}) => state.$$commentStore;

export default createSelector(
  commentStoreSelector,
  ($$commentStore: $$MapType) => $$commentStore.toJS()
);
