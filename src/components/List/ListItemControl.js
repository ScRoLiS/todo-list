import React from 'react';
import Icon from '../Icon';

function ListItemControl({ type, action }) {
  switch (type) {
    case 'remove':
      return (
        <button className="list__control list__control--remove" onClick={action}>
          <Icon className="list__control-icon" iconName="trash" />
        </button>
      );
    case 'edit':
      return (
        <button className="list__control list__control--edit" onClick={action}>
          <Icon className="list__control-icon" iconName="create" />
        </button>
      );
    case 'important':
      return (
        <button className="list__control list__control--important" onClick={action}>
          <Icon className="list__control-icon" iconName="warning" />
        </button>
      );
    default:
      return null;
  }
}

export default ListItemControl;
