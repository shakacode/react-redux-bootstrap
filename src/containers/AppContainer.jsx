// @flow
import React from 'react';
import { Provider } from 'react-redux';

import CommentContainer from './CommentContainer';
import store from '../store';

const AppContainer = () => (
  <Provider store={store}>
    <CommentContainer />
  </Provider>
);

export default AppContainer;
