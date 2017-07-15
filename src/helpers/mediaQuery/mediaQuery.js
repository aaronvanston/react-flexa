import { css } from 'styled-components';

import { themeProvider } from '../../theme';

const { theme } = themeProvider;

const mediaQuery = props =>
  (themeProvider.breakpointsKeys(props).reduce((accumulator, value) => {
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
