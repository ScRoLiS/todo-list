import React from 'react';
import TodoCreator from '../TodoCreator';
import ListTodoItem from './ListTodoItem';

import './List.css';

function ListTodo({ currentList, createTodo, editTodo, removeTodo }) {
  return (
    <div className="list list--todo">
      <TodoCreator action={createTodo} placeholder="Новая задача" />
      {
        currentList.length > 0
          ? <ul className="list__item-wrapper">
            {currentList.map(item => {
              return <ListTodoItem
                key={item.id}
                id={item.id}
                name={item.name}
                done={item.done}
                important={item.important}
                editTodo={editTodo}
                removeTodo={removeTodo} />
            }
            )}
          </ul>
          : <span className="list__empty">Список пуст</span>
      }
    </div>
  );
}

export default ListTodo;
