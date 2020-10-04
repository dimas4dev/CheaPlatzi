import React from 'react';
import { Link } from "react-router-dom";

import Button from './Button';

import "../assets/styles/components/CardHome.scss";

const CardHome = ({
  linkImage,
  productoName,
  productBrand,
  productDescription,
  productLink,
}) => {
  return (
    <article className='card--home'>
      <figure>
        <img src={linkImage} alt='producto' />
      </figure>
      <div className='card--detail'>
        <div className='card--detail-title'>
          <h1>{productoName}</h1>
          <hr className='divider__product' />
        </div>
        <div className='card--detail-subtitle'>
          <p>{productBrand}</p>
        </div>
        <div className='card--detail-description'>
          <p>{productDescription}</p>
        </div>
      </div>
      <Link to={productLink}>
        <Button text="Comparar" classnames="button--popular" />
      </Link>
    </article>
  );
};

export default CardHome;
