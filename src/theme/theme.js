import { DEFAULT_THEME } from '~/config';

import defaultTheme from './defaultTheme';

const theme = (props) => {
  const customTheme = (props.theme && props.theme[DEFAULT_THEME]) || {};

  return {
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
  };
};

export default theme;
