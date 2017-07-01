import { css } from 'styled-components';

const mediaQuery = (width, styles) => (
  (width === 0) ? css`${styles.split(',').join('')}` :
  css`@media (min-width: ${width}rem) {
    ${styles.split(',').join('')}
  }`
);

export default mediaQuery;
