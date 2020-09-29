import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import Button from './Button';
import Search from './Search';

import Logo from '../assets/images/VsBuyLogo.png';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/components/Header.scss';

const Header = ({ location }) => {
  return (
    <header className='header'>
      <Link className='header__logo' to='/'>
        <figure>
          <img src={Logo} alt='Logo de VsBuy' />
        </figure>
      </Link>

      {location.pathname === '/' && (
        <div className='container__buttons'>
          <Button className='button__space' text='Login' classnames='button' />
          <Button
            className='button__space'
            text='Sign up'
            classnames='button button--space button--yellow'
          />
        </div>
      )}

      {location.pathname !== '/' && (
        <div className='header__search--avatar'>
          <Search
            inputStyles='search__input'
            guide='¿Qué artículo buscas?'
            action='Buscar'
            styles='button--search button--yellow'
          />
          <figure>
            <img className='avatar' src={avatar} alt='Avatar de usuario' />
          </figure>
        </div>
      )}
    </header>
  );
};

export default withRouter(Header);
