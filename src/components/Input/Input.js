import React from 'react';
import classNames from 'classnames';
import './Input.css'

function Input({ className = '', placeholder = '', onChange }) {
  return (
    <input
      className={classNames('input', className)}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
