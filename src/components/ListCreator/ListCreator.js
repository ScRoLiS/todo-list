import React, { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import Icon from '../Icon';
import IconPicker from '../IconPicker';
import withInput from '../../hoc/withInput';
import './ListCreator.css';

function ListCreator({ action, value = '', onChange, placeholder }) {
  const [picker, showPicker] = useState(false);
  const [icon, setIcon] = useState('list');

  const switchPicker = () => {
    showPicker(!picker);
  };

  const switchIcon = (iconName) => {
    setIcon(iconName);
    switchPicker(false);
  };

  const createList = () => {
    action(icon);
  };

  return (
    <div className="list-creator">
      <Button onClick={switchPicker} className="list-creator__button list-creator--left">
        <Icon iconName={icon} />
      </Button>

      <Input action={createList} onChange={onChange} placeholder={placeholder} value={value} />

      <Button onClick={createList} className="list-creator__button list-creator--right">
        <Icon iconName="add-circle" />
      </Button>

      {
        picker
          ? <IconPicker action={switchIcon} />
          : null
      }
    </div>
  );
}

export default withInput(ListCreator);
