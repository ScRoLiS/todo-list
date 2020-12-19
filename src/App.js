import React, { useState } from 'react';
import Todo from './utils/Todo';
import './App.css';

import List, { ListTodo } from './components/List';

function App() {
  const [data, setData] = useState(Todo.todos);
  const [currentList, setList] = useState(null);

  const createList = (list) => {
    const newList = Todo.newList(Todo.rnd(), list.data, list.value, []);
    setData(Todo.addList(data, newList));
  };

  const createTodo = (name) => {
    const newTodo = Todo.addTodo(currentList, Todo.newTodo(Todo.rnd(), name.value, false, false));
    setData(Todo.insertTodo(data, currentList.id, newTodo));
    setList(newTodo);
  }

  const removeTodo = (id) => {
    const newList = Todo.removeTodo(currentList, id);
    setList(newList);
    setData(Todo.replaceList(data, newList));
  }

  const removeList = (id) => {
    if (currentList != null && currentList.id === id)
      setList(null);
    setData(Todo.removeList(data, id));
  };

  const editTodo = (id, name, done, important) => {
    const newList = Todo.editTodo(currentList, id, name, done, important);
    setList(newList);
    setData(Todo.replaceList(data, newList));
  };

  const selectList = (id) => {
    const newList = Todo.getList(data, id);
    setList(newList);
  };

  return (
    <div className="app">
      <List data={data} createList={createList} currentList={currentList} selectList={selectList} remove={removeList} />
      { currentList ? <ListTodo currentList={currentList.todos} createTodo={createTodo} editTodo={editTodo} removeTodo={removeTodo} /> : null}
    </div>
  );
}

export default App;
