// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';

const bootstrap = () => {
  ReactDOM.render(React.createElement(AppContainer), document.getElementById('app'));
};

setTimeout(() => bootstrap());
