import React from 'react';

import Button from './Button';

import '../assets/styles/components/Contact.scss';

const Contact = ({guide, action, styles}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='contact__input'
        placeholder={guide}
        id='contact'
        type='text'
      />
      <Button text={action} classnames={styles} />
    </form>
  );
};

export default Contact;
