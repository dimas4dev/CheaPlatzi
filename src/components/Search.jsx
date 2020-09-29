import React from 'react';

import Button from './Button';

import '../assets/styles/components/Search.scss';

const Search = ({ guide, action, styles, inputStyles }) => {
  return (
    <form>
      <input className={inputStyles} placeholder={guide} />
      <Button text={action} classnames={styles} />
    </form>
  );
};

export default Search;
