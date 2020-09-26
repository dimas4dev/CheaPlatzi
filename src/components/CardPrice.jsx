import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/CardPrice.scss';

const CardPrice = ({
  productImage,
  productTitle,
  productDescription,
  marketImage,
  price,
  productLink,
}) => {
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

      <div className='card__container'>
        <div className='card__image'>
          <img src={productImage} alt='Imagen del Producto' />
        </div>
        <div className='card__details'>
          <h1 className='card__details--title'>{productTitle}</h1>
          <p className='card__details--description'>{productDescription}</p>
        </div>
        <div className='card__market'>
          <img src={marketImage} alt='imagen del E-comerce' />
        </div>
        <div className='card__price'>
          <p>{price}</p>
        </div>
        <div className='card__button'>
          <Link to={productLink} className='card__button--link'>
            Comprar
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardPrice;
