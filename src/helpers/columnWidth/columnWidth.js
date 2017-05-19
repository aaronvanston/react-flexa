import { css } from 'styled-components';
import has from 'lodash.has';

import { themeProvider } from '../../theme';

const { theme } = themeProvider;

export const percentage = (props, breakpoint) =>
  (Math.abs(props[breakpoint]) / theme(props).columns) * 100;

const columnWidth = (props, breakpoint) => {
  const width = percentage(props, breakpoint);

  return has(props, `${breakpoint}`) ? css`
    flex-basis: ${width}%;
    max-width: ${width}%;
  ` : null;
};
export default columnWidth;
