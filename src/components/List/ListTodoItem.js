import React from 'react';
import classNames from 'classnames';
import ListItemControl from './ListItemControl';

function ListTodoItem({ className, id, name, done, important, editTodo, removeTodo }) {
  const removeItem = (e) => {
    e.stopPropagation();
    removeTodo(id);
  };

  const switchImportant = () => {
    editTodo(id, name, done, !important);
  };

  return (
    <li className={classNames({
      'list__item': true,
      'list__item--important': important
    })}>
      <span className="list__name">{name}</span>
      <div className="list__controls">
        <ListItemControl type="edit" />
        <ListItemControl type="important" action={switchImportant} />
        <ListItemControl type="remove" action={removeItem} />
      </div>
    </li>
  );
}

export default ListTodoItem;
