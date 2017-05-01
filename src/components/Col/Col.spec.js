import React from 'react';
import { shallow } from 'enzyme';

import Col from './Col';

describe('Create element', () => {
  test('Should by default create a div element', () => {
    const wrapper = shallow(<Col />);
    expect(wrapper.dive().type()).toEqual('div');
  });

  test('Should create a custom element if provided', () => {
    const wrapper = shallow(<Col elementType="span" />);
    expect(wrapper.dive().type()).toEqual('span');
    expect(wrapper.dive().type()).not.toEqual('div');
  });
});
