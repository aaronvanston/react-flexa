import _ from 'lodash';

import { css } from 'styled-components';

import { themeProvider } from '~/theme';

const { theme } = themeProvider;

export const gutterWidth = (props, breakpoint) => {
  if (_.has(props, 'gutter')) {
    return _.isObject(props.gutter) ? props.gutter[breakpoint] : props.gutter;
  }

  return _.isObject(theme(props).gutter) ? theme(props).gutter[breakpoint] : theme(props).gutter;
};

export const row = (props, breakpoint) => {
  const gutterUnit = gutterWidth(props, breakpoint);
  const gutter = _.isNumber(gutterUnit) ? `${gutterUnit}rem` : gutterUnit;
  return (css`
    margin-left: calc(-${gutter} / 2);
    margin-right: calc(-${gutter} / 2);
  `);
};

export const col = (props, breakpoint) => {
  const gutterUnit = gutterWidth(props, breakpoint);
  const gutter = _.isNumber(gutterUnit) ? `${gutterUnit}rem` : gutterUnit;
  return (css`
    padding-left: calc(${gutter} / 2);
    padding-right: calc(${gutter} / 2);
  `);
};
