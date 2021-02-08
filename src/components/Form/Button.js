import React from 'react';
import PropTypes from "prop-types";
import './form.scss';

const Button = ({ type, label }) => {
  return (
    <button type={type} className="button__button">
      {label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
}

Button.defaultProps = {
  type: '',
  label: '',
}

export default Button;