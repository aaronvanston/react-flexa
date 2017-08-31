import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Row from './Row';

describe('style rendering', () => {
  test('renders corrects', () => {
    const wrapper = mount(<Row />);
    expect(wrapper).toMatchSnapshot();
  });

  test('generates default css', () => {
    const tree = renderer.create(<Row />).toJSON();
    expect(tree).toHaveStyleRule('box-sizing', 'border-box');
    expect(tree).toHaveStyleRule('margin-left', 'calc(-0.5rem / 2)');
    expect(tree).toHaveStyleRule('margin-right', 'calc(-0.5rem / 2)');
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('flex-direction', 'row');
    expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
    expect(tree).toHaveStyleRule('justify-content', 'flex-start');
    expect(tree).toHaveStyleRule('align-items', 'stretch');
    expect(tree).toHaveStyleRule('align-content', 'stretch');
  });

  test('generates custom css', () => {
    const tree = renderer.create(
      <Row
        display="inline-flex"
        flexDirection="row-reverse"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="baseline"
        alignContent="stretch"
      />,
      ).toJSON();
    expect(tree).toHaveStyleRule('display', 'inline-flex');
    expect(tree).toHaveStyleRule('flex-direction', 'row-reverse');
    expect(tree).toHaveStyleRule('flex-wrap', 'nowrap');
    expect(tree).toHaveStyleRule('justify-content', 'center');
    expect(tree).toHaveStyleRule('align-items', 'baseline');
    expect(tree).toHaveStyleRule('align-content', 'stretch');
  });
});

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
