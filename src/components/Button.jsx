import React from 'react';

import '../assets/styles/components/Button.scss';

const Button = (props) => {
  const { text, classnames } = props;
  return (

    <button type='button' className={classnames}>
      {text}
    </button>

  );
};

export default Button;
