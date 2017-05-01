import React from 'react';
import { shallow } from 'enzyme';

import Row from './Row';

describe('Create element', () => {
  test('Should by default create a div element', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper.dive().type()).toEqual('div');
  });

  test('Should create a custom element if provided', () => {
    const wrapper = shallow(<Row elementType="span" />);
    expect(wrapper.dive().type()).toEqual('span');
    expect(wrapper.dive().type()).not.toEqual('div');
  });
});
