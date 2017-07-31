import has from 'lodash/has';

import { FLEXA_THEME } from '../config';

import defaultTheme from './defaultTheme';

export const theme = (props) => {
  const customTheme = (has(props, 'theme') && has(props, `theme[${FLEXA_THEME}]`))
    ? props.theme[FLEXA_THEME]
    : {};
  return ({
    ...defaultTheme,
    ...customTheme,
    gutter: {
      ...defaultTheme.gutter,
      ...customTheme.gutter,
    },
    breakpoints: {
      ...defaultTheme.breakpoints,
      ...customTheme.breakpoints,
    },
  });
};

export const breakpoints = props => theme(props).breakpoints;
export const breakpointsKeys = props => Object.keys(theme(props).breakpoints);
