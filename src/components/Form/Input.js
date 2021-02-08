import React from 'react';
import PropTypes from "prop-types";
import './form.scss';

const Input = ({ label, value, onChange, type, placeholder }) => {
  return (
    <div className="input__container">
      <label className="input__label">
        <div className="input__label-text">
          {label}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input__input"
        />
      </label>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  label: '',
  value: '',
  type: '',
  placeholder: '',
  onChange: null,
}

export default Input;