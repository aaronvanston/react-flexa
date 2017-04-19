import { css } from 'styled-components';

import { themeProvider } from '~/theme';

const { theme } = themeProvider;

export const percentage = (props, breakpoint) =>
  (Math.abs(props[breakpoint]) / theme(props).columns) * 100;

const columnWidth = (props, breakpoint) => {
  const width = percentage(props, breakpoint);
  return (css`
    flex-basis: ${width}%;
    max-width: ${width}%;
  `);
};
export default columnWidth;
