import React from 'react';
import {mount} from 'enzyme';
import Contact from '../../components/Contact';

describe('<Contact />', () => {
  const contact = mount(<Contact />);
  test('Render del componente Contact', () => {
    expect(contact.length).toEqual(1);
  });
});
