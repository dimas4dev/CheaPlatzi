import React from 'react';

import CardHome from './CardHome';

import '../assets/styles/components/ListCards.scss';

const ListCards = () => {
  return (
    <div className='list--cards'>
      <CardHome />
      <CardHome />
      <CardHome />
      <CardHome />
    </div>
  );
};

export default ListCards;

