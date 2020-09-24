import React from 'react';

import Button from './Button';

import '../assets/styles/components/Search.scss';

const Search = ({ guide, action, styles }) => {
  return (
    <form>
      <input className='search__input' placeholder={guide} />
      <Button text={action} classnames={styles} />
    </form>
  );
};

export default Search;
