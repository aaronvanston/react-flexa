import has from 'lodash.has';
import isObject from 'lodash.isobject';
import isNumber from 'lodash.isnumber';
import isUndefined from 'lodash.isundefined';
import { css } from 'styled-components';

import { themeProvider } from '../../theme';

const { theme } = themeProvider;

export const gutterWidth = (props, breakpoint) => {
  if (has(props, 'gutter')) {
    if (isObject(props.gutter) && has(props, `gutter.${breakpoint}`)) {
      return props.gutter[breakpoint];
    }
    
    return props.gutter;
  }

  return isObject(theme(props).gutter) 
    ? theme(props).gutter[breakpoint] 
    : theme(props).gutter;
};

export const row = (props, breakpoint) => {
  const gutterUnit = gutterWidth(props, breakpoint);
  const gutter = isNumber(gutterUnit) ? `${gutterUnit}rem` : gutterUnit;

  return isUndefined(gutterUnit) ? null : css`
    margin-left: calc(-${gutter} / 2);
    margin-right: calc(-${gutter} / 2);
  `;
};

export const col = (props, breakpoint) => {
  const gutterUnit = gutterWidth(props, breakpoint);
  const gutter = isNumber(gutterUnit) ? `${gutterUnit}rem` : gutterUnit;

  return isUndefined(gutterUnit) ? null : css`
    padding-left: calc(${gutter} / 2);
    padding-right: calc(${gutter} / 2);
  `;
};
