import has from 'lodash/has';
import camelCase from 'lodash/camelCase';
import isObject from 'lodash/isObject';
import isNull from 'lodash/isNull';
import { css } from 'styled-components';

import { themeProvider } from '../../theme';
import { sortBreakpoints } from '../../helpers';

export const getPropertyValue = (props, breakpoint, property) => {
  const propertySlug = camelCase(property);
  const ThemeBreakpoints = themeProvider.theme(props).breakpoints;

  if (has(props, `${propertySlug}`)) {
    if (isObject(props[propertySlug])) {
      return props[propertySlug][breakpoint] || null;
    }

    if (breakpoint === sortBreakpoints(ThemeBreakpoints)[0]) {
      return props[propertySlug] || null;
    }
  }

  return null;
};


const CSSProperty = (props, breakpoint, property) => {
  const value = getPropertyValue(props, breakpoint, property);

  return isNull(value) ? null : css`
    ${property}: ${value};
  `;
};

export default CSSProperty;
