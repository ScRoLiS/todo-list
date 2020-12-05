import React from 'react';
import classNames from 'classnames';
import './Input.css'

function Input({ className = '', placeholder = '', onChange, value = '', action }) {

  const keyPress = (e) => {
    if(e.key === 'Enter')
      action();
  }

  return (
    <input
      className={classNames('input', className)}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={keyPress}
      value={value}
    />
  );
}

export default Input;
