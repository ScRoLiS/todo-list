import React from 'react';
import classNames from 'classnames';
import './Button.css'

function Button({ className, onClick, children }) {
  return (
    <button
      className={classNames('button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
