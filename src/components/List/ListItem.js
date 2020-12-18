import React from 'react';
import ListItemControl from './ListItemControl';
import Icon from '../Icon';

function ListItem({id, icon, name, remove}) {

  const removeItem = () => {
    remove(id);
  };

  return (
    <li className="list__item">
      <Icon className="list__icon" iconName={icon} />
      <span className="list__name">{ name }</span>
      <div className="list__controls">
        <ListItemControl type="remove" action={removeItem} />
      </div>
    </li>
  );
}

export default ListItem;
