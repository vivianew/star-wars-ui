import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Login from './containers/Login/Login';
import FilmsContainer from './containers/Films/Films';
import Starships from './containers/Starships/Starships';
import Vehicles from './containers/Vehicles/Vehicles';
import People from './containers/People/People';
import Planets from './containers/Planets/Planets';
import Species from './containers/Species/Species';
import HomeContainer from './containers/Home/Home';
import ForgetPW from './containers/Login/ForgetPW';
import { logout } from './actions/loginActions';
import './logged-in-container.scss';

const LoggedInContainer = () => {
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
      to: '/starships',
      text: 'Starships',
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

  const { location: { pathname }, push } = useHistory();
  const { isLoggedIn } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const handleLogout = () => () => {
    dispatch(logout())

    push('/');
  }

  return (
    <div className="logged-in__container">
      <div className="logged-in__body">
        <NavigationBar
          links={links}
          currentUrl={pathname}
          title="Star Wars API"
          logout={handleLogout()}
        />

        <RestrictedRoute isLoggedIn={!isLoggedIn}>
          <Switch>
            <Route path="/forgetPW" component={ForgetPW} />
            <Route path="/" component={Login} />
          </Switch>
        </RestrictedRoute>

        <>
          <RestrictedRoute isLoggedIn={isLoggedIn}>
            <Switch>
              <Route path="/films" component={FilmsContainer} />
              <Route path="/people" component={People} />
              <Route path="/starships" component={Starships} />
              <Route path="/vehicles" component={Vehicles} />
              <Route path="/planets" component={Planets} />
              <Route path="/species" component={Species} />
              <Route path="/" component={HomeContainer} />
            </Switch>
          </RestrictedRoute>
        </>
      </div>
    </div>
  )
}

export default LoggedInContainer;