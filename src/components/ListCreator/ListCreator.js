import React from 'react';

import Button from '../Button';
import Input from '../Input';
import Icon from '../Icon';
import withInput from '../../hoc/withInput';
import './ListCreator.css';

function ListCreator({ action, onChange, placeholder, value }) {


  return (
    <div className="list-creator">
      <Button className="list-creator__button list-creator--left">
        <Icon iconName="list" />
      </Button>

      <Input action={action} onChange={onChange} placeholder={placeholder} value={value} />

      <Button onClick={action} className="list-creator__button list-creator--right">
        <Icon iconName="add-circle" />
      </Button>
    </div>
  );
}

export default withInput(ListCreator);
