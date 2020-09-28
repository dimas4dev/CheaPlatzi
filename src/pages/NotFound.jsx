import React from 'react';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => {
  return (
    <section className='notFound'>
      <h1 className='notFound__title'>ERROR 404</h1>
      <h2 className='notFound__subtitle'>
        Aquí no hay nada.
        <br />
        Intenta buscar algo similar en la parte de arriba.
      </h2>
      <img
        src='https://www.alfabetajuega.com/wp-content/uploads/2019/09/pikachu-pokemon-triste-ojos.jpg'
        alt=''
        className='notFound__image'
      />
    </section>
  );
};

export default NotFound;
