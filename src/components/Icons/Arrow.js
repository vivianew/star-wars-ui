import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ onClick, width, rotation, animation, className }) => {
  let styleProp = {};

  if (animation) {
    styleProp = { style: { transition: `transform ${animation}` } }
  }

  return (
    <svg viewBox="5 5 14 14" width={width} className={className} onClick={onClick}>
      <path
        {...styleProp}
        transform={`rotate(${rotation} 12 12)`}
        d="M10.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L10.414 12z"
      />
    </svg>
  )
}


Arrow.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.number,
  rotation: PropTypes.number,
  animation: PropTypes.string,
  className: PropTypes.string,
}

Arrow.defaultProps = {
  onClick: null,
  width: 16,
  rotation: 0,
  animation: '',
  className: '',
}

export default Arrow;