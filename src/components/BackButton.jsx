import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/BackButton.scss';

const BackButton = () => {
  return (
    <>
      <div className='link__container'>
        <Link to='/' className='link'>
          <div className='link__button--regresar'>
            <img
              src='https://www.iconfinder.com/data/icons/spotify-line-ui-kit/100/go-back-line-512.png'
              alt='regresar'
            />
            Regresar
          </div>
        </Link>
      </div>
      <h1 className='cardPrice__title'>Comparación De Precios</h1>
    </>
  );
};

export default BackButton;
