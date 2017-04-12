import _ from 'lodash';

import { FLEXA_THEME } from '~/config';

import defaultTheme from './defaultTheme';

export const theme = (props) => {
  const customTheme = (_.has(props, 'theme') && _.has(props, `theme[${FLEXA_THEME}]`))
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

// TODO generate these dynamically based on the object keys for breakpoints
export const breakpoints = ['xs', 'sm', 'md', 'lg'];
