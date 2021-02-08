import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Login from './containers/Login/Login';
import FilmsContainer from './containers/Films/Films';
import Spaceships from './containers/Spaceships/Spaceships';
import People from './containers/People/People';
import HomeContainer from './containers/Home/Home';
import './logged-in-container.scss';

const LoggedInContainer = ({ isLoggedIn = false }) => {
  const links = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/planets',
      text: 'Planets',
    },
    {
      to: '/spaceships',
      text: 'Spaceships',
    },
    {
      to: '/vehicles',
      text: 'Vehicles',
    },
    {
      to: '/people',
      text: 'People',
    },
    {
      to: '/films',
      text: 'Films',
    },
    {
      to: '/species',
      text: 'Species',
    },
  ];

  const { location: { pathname } } = useHistory();


  return (
    <div className="logged-in__container">
      <div className="logged-in__body">
        <NavigationBar
          links={links}
          currentUrl={pathname}
          title="Star Wars API"
        />

        <RestrictedRoute isLoggedIn={!isLoggedIn}>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Login} />
        </RestrictedRoute>

        <>
          <RestrictedRoute isLoggedIn={isLoggedIn}>
            <Switch>
              <Route path="/films" component={FilmsContainer} />
              <Route path="/people" component={People} />
              <Route path="/spaceships" component={Spaceships} />
              <Route path="/" component={HomeContainer} />
            </Switch>
          </RestrictedRoute>
        </>
      </div>
    </div>
  )
}

export default LoggedInContainer;