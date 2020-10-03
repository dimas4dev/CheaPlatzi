import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import CardPrice from './CardPrice';
import '../assets/styles/components/CardPrice.scss';

const ListPrices = ({ productsSearch }) => {
  return (
    <section className='cardPrice'>
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

      <ul>
        {productsSearch.map((item) => {
          return (
            <li key={item.index}>
              <CardPrice item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.productsReducer;
};

export default connect(mapStateToProps, {})(ListPrices);
