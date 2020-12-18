import React from 'react';
import classNames from 'classnames';
import ListItemControl from './ListItemControl';
import Icon from '../Icon';

function ListItem({ className, id, icon, name, select, remove }) {

  const removeItem = (e) => {
    e.stopPropagation();
    remove(id);
  };

  const selectItem = (e) => {
    select(id);
  }

  return (
    <li className={classNames('list__item', className)} onClick={selectItem}>
      <Icon className="list__icon" iconName={icon} />
      <span className="list__name">{name}</span>
      <div className="list__controls">
        <ListItemControl type="remove" action={removeItem} />
      </div>
    </li>
  );
}

export default ListItem;
