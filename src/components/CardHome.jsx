import React from 'react';

import imageCardHome from '../assets/images/imageHome.png';
import Button from './Button';

import '../assets/styles/components/CardHome.scss';

const CardHome = () => {
  return (
    <article className='card--home'>
      <figure>
        <img src={imageCardHome} alt='Imágen producto' />
      </figure>
      <h5>
        Título
      </h5>
      <p>loremips loremips loremips loremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremipsloremips</p>
      <Button text='Agregar a mi lista' classnames='button--popular' />
    </article>
  );
};

export default CardHome;
