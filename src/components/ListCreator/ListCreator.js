import React from 'react';
import './ListCreator.css';

import Button from '../Button';
import Input from '../Input';
import Icon from '../Icon';

function ListCreator() {
  return (
    <div className="list-creator">
      <Button
        className="list-creator__button list-creator--left"
      >
        <Icon iconName="list" />
      </Button>

      <Input placeholder="Новый список" />

      <Button
        className="list-creator__button list-creator--right"
      >
        <Icon iconName="add-circle" />
      </Button>
    </div>
  );
}

export default ListCreator;
