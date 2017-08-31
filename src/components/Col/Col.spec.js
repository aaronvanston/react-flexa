import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Col from './Col';

describe('style rendering', () => {
  test('renders corrects', () => {
    const wrapper = mount(<Col />);
    expect(wrapper).toMatchSnapshot();
  });

  test('generates default css', () => {
    const tree = renderer.create(<Col />).toJSON();
    expect(tree).toHaveStyleRule('box-sizing', 'border-box');
    expect(tree).toHaveStyleRule('display', 'block');
    expect(tree).toHaveStyleRule('flex', '0 0 auto');
    expect(tree).toHaveStyleRule('align-self', 'auto');
    expect(tree).toHaveStyleRule('padding-left', 'calc(0.5rem / 2)');
    expect(tree).toHaveStyleRule('padding-right', 'calc(0.5rem / 2)');
  });

  test('generates custom css', () => {
    const tree = renderer.create(<Col order={2} alignSelf="flex-start" />).toJSON();
    expect(tree).toHaveStyleRule('order', '2');
    expect(tree).toHaveStyleRule('align-self', 'flex-start');
  });
});

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

  test('generates custom with custom display css property', () => {
    const tree = renderer.create(<Col display={'flex'} />).toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
  });
});
