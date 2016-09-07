// @flow
import { watchFetchData } from './commentSagas';

export default function* rootSaga(): Generator<Array<Iterator<any>>, void, void> {
  yield [watchFetchData()];
}
