import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import LoggedInContainer from './LoggedInContainer';
import './styles/project.scss';

const App = () => {
  return (
    <Router>
      <Route path="/" component={LoggedInContainer} />
    </Router>
  );
};

export default App;