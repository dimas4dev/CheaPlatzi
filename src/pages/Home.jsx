import React from 'react';

import Search from '../components/Search';
import CardFunctions from '../components/CardFunctions';
import ListCards from '../components/ListCards';
import Button from '../components/Button';

import yellow from '../assets/images/yellow.png';
import dark from '../assets/images/dark.png';
import blue from '../assets/images/blue.png';
import '../assets/styles/pages/Home.scss';

const Home = (props) => {
  return (
    <main className='home'>
      <h1 className='home__tittle'>
        Compara el precio de múltiples productos en un solo lugar
      </h1>

      <div className='home__search'>
        <Search
          inputStyles='home__input'
          action='Buscar'
          guide='¿Qué artículo buscas?'
          styles='button--home'
        />
      </div>

      <h2 className='home__functions'>¿Cómo funciona?</h2>

      <div className='container__functions'>
        <CardFunctions
          text='Busca el producto que te interesa'
          background={yellow}
        />
        <CardFunctions
          text='Elige el más barato de nuestra lista'
          background={dark}
        />
        <CardFunctions
          text='Y ve directo al lugar de compra'
          background={blue}
        />
      </div>

      <h5 className='home__popular'>Artículos populares</h5>

      <ListCards />

      <h5 className='home__choose'>Nosotros comparamos, tú eliges.</h5>

      <div className='home__button--register'>
        <Button
          text='Regístrate'
          classnames='button--register button--yellow'
        />
      </div>
    </main>
  );
};

export default Home;
