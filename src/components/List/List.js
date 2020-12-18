import React from 'react';
import './List.css';

import ListCreator from '../ListCreator';
import ListItem from './ListItem';

function List({ data, createList, remove }) {
  console.log(data);
  return (
    <div className="list">
      <ListCreator placeholder="Новый список" action={createList} />
      {
        data.length > 0
          ? <ul className="list__item-wrapper">
            {
              data.map(item => {
                return <ListItem key={item.id} id={item.id} icon={item.icon} name={item.name} remove={remove} />
              })
            }
          </ul>
          : <span className="list__empty">Список пуст</span>
      }
    </div>
  );
}

export default List;
