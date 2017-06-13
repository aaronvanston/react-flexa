import has from 'lodash.has';
import isObject from 'lodash.isobject';
import isNumber from 'lodash.isnumber';
import isUndefined from 'lodash.isundefined';
import { css } from 'styled-components';

import { themeProvider } from '../../theme';

const { theme } = themeProvider;

export const gutterWidth = (props, breakpoint) => {
  // Does the gutter prop exists?
  if (has(props, 'gutter')) {
    // is the gutter a responsive object?
    if (isObject(props.gutter)) {
      // does the object actually include the current mapped breakpoint?
      if (has(props, `gutter.${breakpoint}`)) {
        // return the value within the gutter object
        return props.gutter[breakpoint];
      }
      // if prop does not exist in gutter object use theme default
      // TODO make function for getting theme default
      return isObject(theme(props).gutter) ? theme(props).gutter[breakpoint] : theme(props).gutter;
    }
    return props.gutter;
  }

  // If the prop does not exists use the theme provider
  // TODO make function for getting theme default
  return isObject(theme(props).gutter) ? theme(props).gutter[breakpoint] : theme(props).gutter;
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
