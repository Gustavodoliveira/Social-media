import PropTypes from 'prop-types';
import React from 'react';

function Input({
  type, name, placeHolder, handleOnChange, value, multiple,
}) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeHolder}
        onChange={handleOnChange}
        value={value}
        {...(multiple ? { multiple } : '')}
      />
    </div>

  );
}

Input.defaultProps = {
  value: '',
  handleOnChange: '',
  multiple: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  multiple: PropTypes.func,
};

export default Input;
