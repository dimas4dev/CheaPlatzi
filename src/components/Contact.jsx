import React from 'react';

import Button from './Button';

import '../assets/styles/components/Contact.scss';

const Contact = ({ guide, action, styles }) => {
  return (
    <form>
      <input className='contact__input' placeholder={guide} />
      <Button text={action} classnames={styles} />
    </form>
  );
};

export default Contact;
