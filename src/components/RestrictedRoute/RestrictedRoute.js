import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RestrictedRoute = ({ isLoggedIn, children }) => {
  const checkedRoute = () => (isLoggedIn ? children : null);

  return (
    <Route
      render={checkedRoute}
    />
  )
}

RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

export default RestrictedRoute;