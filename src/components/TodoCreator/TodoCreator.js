import React from 'react';
import Button from '../Button';
import Input from '../Input';
import withInput from '../../hoc/withInput';

import './TodoCreator.css';

function TodoCreator({ action, value = '', onChange, placeholder }) {

  const createTodo = () => {
    action(null);
  };

  return (
    <div className="todo-creator">
      <div className="todo-creator__create">
        <Input className="todo-creator__input todo-creator--left" action={createTodo} onChange={onChange} placeholder={placeholder} value={value} />
        <Button className="todo-creator--right" onClick={createTodo}>Добавить</Button>
      </div>
      <Button>Сортировка</Button>
    </div>
  );
}

export default withInput(TodoCreator);
