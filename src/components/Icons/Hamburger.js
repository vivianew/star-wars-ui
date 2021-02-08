import React from 'react';
import PropTypes from 'prop-types';

const HamburgerIcon = ({ burgerClick, className }) => (
  <div onClick={burgerClick}>
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="90" height="6"></rect>
      <rect y="30" width="90" height="6"></rect>
      <rect y="60" width="90" height="6"></rect>
    </svg>
  </div>
);

HamburgerIcon.propTypes = {
  burgerClick: PropTypes.func,
  className: PropTypes.string,
}

HamburgerIcon.defaultProps = {
  burgerClick: null,
  className: '',
}

export default HamburgerIcon;