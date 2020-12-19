import React from 'react';
import classNames from 'classnames';
import ListItemControl from './ListItemControl';

function ListTodoItem({ className, id, name, done, important, editTodo, removeTodo }) {
  const removeItem = (e) => {
    e.stopPropagation();
    removeTodo(id);
  };

  const switchImportant = (e) => {
    e.stopPropagation();
    editTodo(id, name, done, !important);
  };

  const switchDone = (e) => {
    e.stopPropagation();
    editTodo(id, name, !done, important);
  };

  const edit = (e) => {
    e.stopPropagation();
  };

  return (
    <li onClick={switchDone} className={classNames({
      'list__item': true,
      'list__item--important': important
    })}>
      <span className={classNames({ 'list__name': true, 'list__name--done': done })}>{name}</span>
      <div className="list__controls">
        <ListItemControl type="edit" action={edit} />
        <ListItemControl type="important" action={switchImportant} />
        <ListItemControl type="remove" action={removeItem} />
      </div>
    </li>
  );
}

export default ListTodoItem;
