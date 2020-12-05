import React, { useState } from 'react';

function withInput(Component) {
  return function (props) {
    const [value, setValue] = useState(props.value);
    const [data, setData] = useState(props.data);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    const action = () => {
      props.action({ value, data });
      setValue('');
    };

    return (
      <Component {...props} onChange={onChange} value={value} action={action} />
    );
  }
}

export default withInput;
