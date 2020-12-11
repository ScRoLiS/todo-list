import React, { Fragment } from 'react';
import './IconPicker.css';

import Icon from '../Icon';

const icons = ['list', 'beer', 'bulb', 'business', 'call', 'cash', 'home', 'star'];

function IconPicker({ action }) {
  return (
    <Fragment>
      <ul className="icon-picker">
        {
          icons.map((item) => {
            return (
              <li key={item} className="icon-picker__item" onClick={() => { action(item) }}>
                <Icon className="icon-picker__icon" iconName={item} />
              </li>
            );
          })
        }
      </ul>
    </Fragment>
  );
}

export default IconPicker;
