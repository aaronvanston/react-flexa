import _ from 'lodash';
import { css } from 'styled-components';

import { themeProvider } from '../../theme';
import { sortBreakpoints } from '../../helpers';

export const getPropertyValue = (props, breakpoint, property) => {
  const propertySlug = _.camelCase(property);
  const ThemeBreakpoints = themeProvider.theme(props).breakpoints;

  if (_.has(props, `${propertySlug}`)) {
    if (_.isObject(props[propertySlug])) {
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

  return _.isNull(value) ? null : css`
    ${property}: ${value};
  `;
};

export default CSSProperty;
