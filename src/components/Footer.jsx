import React from 'react';

import Contact from './Contact';

import instagram from '../assets/images/instagram.svg';
import facebook from '../assets/images/facebook.svg';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__contact'>
        <label htmlFor='contact'>
          Contáctanos y resolveremos todas tus inquietudes
        </label>
        <Contact
          guide='Tu email'
          action='Enviar'
          styles='button--search button--yellow'
        />
      </div>
      <div className='footer__social'>
        <figure>
          <img src={instagram} alt='link to Instagram' />
        </figure>
        <figure>
          <img src={facebook} alt='link to facebook' />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
