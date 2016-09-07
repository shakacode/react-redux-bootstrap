// @flow
import { connect } from 'react-redux';

import { createActionsMap } from 'lib/reduxUtils';

import commentSelector from '../selectors/commentSelector';
import * as commentActions from '../actions/commentActions';
import Comment from '../components/Comment';

export default connect(commentSelector, createActionsMap({ commentActions }))(Comment);
