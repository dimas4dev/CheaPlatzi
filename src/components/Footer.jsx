import React from 'react';

import Contact from './Contact';

import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';
import facebook from '../assets/images/facebook.svg';
import youtube from '../assets/images/youtube.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__contact'>
        <p>Contactanos y resolveremos todas tus inquietudes.</p>
        <Contact guide='Tu email' action='Enviar' styles='button--search button--yellow' />

      </div>
      <div className='footer__social'>
        <figure>
          <img src={instagram} alt='link to Instagram' />
        </figure>

        <figure>
          <img src={twitter} alt='link to twitter' />
        </figure>

        <figure>
          <img src={facebook} alt='link to facebook' />
        </figure>

        <figure>
          <img src={youtube} alt='link to youtube' />
        </figure>

        <figure>
          <img src={whatsapp} alt='link to whatsapp' />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
