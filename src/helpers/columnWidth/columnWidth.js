import { css } from 'styled-components';
import has from 'lodash/has';

import { themeProvider } from '../../theme';

const { theme } = themeProvider;

export const percentage = (props, breakpoint) =>
  (Math.abs(props[breakpoint]) / theme(props).columns) * 100;

export const isHidden = (props, breakpoint) =>
  (props[breakpoint] === 0 || props[breakpoint] === 'hidden');

const columnWidth = (props, breakpoint) => {
  if (isHidden(props, breakpoint)) {
    return css`
      display:none;
    `;
  }

  const width = percentage(props, breakpoint);

  return has(props, `${breakpoint}`) ? css`
    flex-basis: ${width}%;
    max-width: ${width}%;
    display: block;
  ` : null;
};
export default columnWidth;
