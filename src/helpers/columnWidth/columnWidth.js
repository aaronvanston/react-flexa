import { css } from 'styled-components';
import has from 'lodash/has';
import isString from 'lodash/isString';

import { themeProvider } from '../../theme';

const { theme } = themeProvider;

export const percentage = (props, breakpoint) =>
  (Math.abs(props[breakpoint]) / theme(props).columns) * 100;

export const display = (props, breakpoint) => {
  if ((props.display && isString(props.display))) {
    return css`display: ${props.display};`;
  }

  return !has(props.display, `${breakpoint}`) ? css`display: block;` : null;
};

export const isHidden = (props, breakpoint) =>
  (props[breakpoint] === 0 || props[breakpoint] === 'hidden');

export const isAuto = (props, breakpoint) =>
  (props[breakpoint] === 'auto');

const columnWidth = (props, breakpoint) => {
  if (isHidden(props, breakpoint)) {
    return css`
      display: none;
    `;
  }

  if (isAuto(props, breakpoint)) {
    return css`
      flex: 1;
    `;
  }

  const width = percentage(props, breakpoint);

  if (has(props, `${breakpoint}`) && typeof props[breakpoint] !== 'string') {
    return css`
      flex-basis: ${width}%;
      max-width: ${width}%;
      ${display(props, breakpoint)}
    `;
  }

  if (has(props, `${breakpoint}`) && typeof props[breakpoint] === 'string') {
    return css`
      width: ${props[breakpoint]};
      max-width: ${props[breakpoint]};
      flex-basis: initial;
    `;
  }

  return null;
};
export default columnWidth;
