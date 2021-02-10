import React, { useState } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../components/Icons/Hamburger';
import './navigation.scss';

const NavigationBar = (props) => {
  const {
    links,
    currentUrl,
    title,
    logout,
  } = props;

  const [showMobileMenu, setToggle] = useState(false);
  const toggleHam = () => setToggle(!showMobileMenu);

  const allLinks = (
    <>
      {
        links.map(({ text, to }) =>
          <Link
            key={text}
            className={classNames('navigation__label-title', {
              'navigation__label-title--selected': to === currentUrl,
            })}
            to={to}
            onClick={toggleHam}
          >
            {text}
          </Link>
        )
      }
    </>
  )

  return (
    <div className="navigation__container">
      <div className="navigation__logo">
        <Link
          to="/"
          className="navigation__site-title"
        >
          {title}
        </Link>
      </div>

      <div className="navigation__ham-icon">
        <HamburgerIcon burgerClick={toggleHam} />
        <div onClick={logout}>Logout</div>
      </div>

      <div className="navigation__labels-container">
        {allLinks}
        <div
          onClick={logout}
          className="navigation__logout"
        >
          Logout
        </div>
      </div>

      {
        showMobileMenu && (
          <div className="navigation__show-mobile-menu">
            <div className="navigation__labels-mob">
              {allLinks}
            </div>
          </div>
        )
      }
    </div>
  )
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
}

NavigationBar.defaultProps = {
  title: '',
  links: [],
}

export default NavigationBar;