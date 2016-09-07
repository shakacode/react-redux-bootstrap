// @flow
import { componentSmokeCheck } from 'lib/testUtils';

import Comment from '.';

const props = { commentActions: { fetchData: () => null }, name: 'foo', entities: {} };
componentSmokeCheck('Comment', Comment, props);
