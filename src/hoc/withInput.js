import React, { useState } from 'react';

function withInput(Component) {
  return function (props) {
    const [value, setValue] = useState(props.value);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    const action = (data) => {
      if(value) {
        props.action({ value, data });
        setValue('');
      } else alert('Пустое нельзя');
    };

    return (
      <Component {...props} onChange={onChange} value={value} action={action} />
    );
  }
}

export default withInput;
