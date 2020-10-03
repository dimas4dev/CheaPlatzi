import React from 'react';

import ListPrices from '../components/ListPrices';
import BackButton from '../components/BackButton';

const Results = () => {
  return (
    <container className='results-page'>
      <BackButton />
      <ListPrices />
    </container>
  );
};

export default Results;
