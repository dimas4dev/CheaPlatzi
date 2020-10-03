import React from 'react';

import '../assets/styles/components/Button.scss';

const Button = (props) => {
  const { handleClick, text, classnames } = props;
  return (

    <button
      type='search'
      className={classnames}
      onClick={handleClick}
    >
      {text}
    </button>

  );
};

export default Button;
