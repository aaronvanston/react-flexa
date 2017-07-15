import { css } from 'styled-components';

import { themeProvider } from '../../theme';

const { theme } = themeProvider;

const mediaQuery = props =>
  (Object.keys(theme(props).breakpoints).reduce((accumulator, value) => {
    const breakpointSize = theme(props).breakpoints[value];

    Object.assign(accumulator, { [value]: (...args) =>
      (breakpointSize === 0 ? css`${css(...args)}` :
        css`@media (min-width: ${breakpointSize}rem) {
          ${css(...args)}
        }`
      ),
    });

    return accumulator;
  }, {})
);

export default mediaQuery;
