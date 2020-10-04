import React from 'react';
import {mount, shallow} from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Home from '../../pages/Home';

describe('<Home />', () => {
  test('Render del componente Home', () => {
    const home = shallow(
      <ProviderMock>
        <Home />
      </ProviderMock>
    );
    expect(home.length).toEqual(1);
  });
  test('Render del titulo', () => {
    const home = mount(
      <ProviderMock>
        <Home />
      </ProviderMock>
    );
    expect(home.find('.home__tittle').text()).toEqual(
      'Compara el precio de múltiples productos en un solo lugar'
    );
  });
});
