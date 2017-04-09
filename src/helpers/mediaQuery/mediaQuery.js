import { css } from 'styled-components';

import { theme } from '~/theme';

const mediaQuery = Object.keys(theme().breakpoints).reduce((accumulator, value) => {
  const breakpointSize = theme().breakpoints[value];

  Object.assign(accumulator, { [value]: (...args) =>
    (breakpointSize === 0 ? css`${css(...args)}` :
      css`@media (min-width: ${breakpointSize}rem) {
        ${css(...args)}
      }`
    ),
  });

  return accumulator;
}, {});

export default mediaQuery;
