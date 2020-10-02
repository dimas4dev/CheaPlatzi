import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/CardPrice.scss';

const CardPrice = ({
  productImage,
  productTitle,
  marketImage,
  price,
  productLink,
}) => {
  return (
    <section className='cardPrice'>
      <div className='card__container'>
        <div className='card__image'>
          <img src={productImage} alt='Imagen del Producto' />
        </div>
        <div className='card__details'>
          <h1 className='card__details--title'>{productTitle}</h1>
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
    </section>
  );
};

export default CardPrice;
