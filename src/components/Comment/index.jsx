// @flow
import React from 'react';

import type { TextInputEvent } from 'lib/types';

import css from './Comment.scss';

const Comment = (props: {
  name: string,
  entities: ?any,
  commentActions: {changeName: Function, fetchData: Function}
}) => (
  <div className={css.comment}>
    <h1>Hello {props.name}</h1>
    <input
      onChange={(event: TextInputEvent) => props.commentActions.changeName(event.target.value)}
      value={props.name}
    />
    <br />
    <button type="button" onClick={props.commentActions.fetchData}>Fetch Data!</button>
    {props.entities && JSON.stringify(props.entities)}
  </div>
);

export default Comment;
